import { IsEmail, IsString } from 'class-validator';
import { templates } from '../constraints/messages.constraint';

export class GetUsersDto {
    @IsString({message: templates.is_string.replace('$field', 'name')})
    name: string;
    
    @IsString({message: templates.is_string.replace('$field', 'username')})
    username: string;

    @IsEmail({}, {message: templates.is_email.replace('$field', 'email')})
    email: string;
}