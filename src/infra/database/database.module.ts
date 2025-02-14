import { Module } from '@nestjs/common';
import { UserRepository } from './prisma/repositories/users.repository';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  providers: [PrismaService, UserRepository],
  exports: [PrismaService, UserRepository]
})
export class DatabaseModule { }
