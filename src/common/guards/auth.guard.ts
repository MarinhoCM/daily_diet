import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { keys } from 'src/config/settings.config';
import { jwtReponse } from './types';

@Injectable()
export class AtGuard implements CanActivate {
    constructor(
        private jwtService: JwtService
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
      
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new UnauthorizedException("Necessário informar token do usuário");
        }
        try {
            const { payload } = await this.jwtService.verifyAsync<jwtReponse>(
                token, {
                publicKey: keys.at_public,
                algorithms: ['RS256']
            });
            request['user'] = payload;
        } catch {
            throw new UnauthorizedException("Token de usuário expirado");
        }

        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}
