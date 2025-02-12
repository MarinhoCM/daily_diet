import { IsEmail, IsOptional, IsString } from 'class-validator';
import { templates } from '../constraints/messages.constraint';

export class GetUsersDto {
    @IsOptional()
    @IsString({message: templates.is_string.replace('$field', 'name')})
    name?: string;
    
    @IsOptional()
    @IsString({message: templates.is_string.replace('$field', 'username')})
    username?: string;
    
    @IsOptional()
    @IsEmail({}, {message: templates.is_email.replace('$field', 'email')})
    email?: string;
}