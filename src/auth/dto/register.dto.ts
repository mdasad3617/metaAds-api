import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsNotEmpty, MinLength, MaxLength, Matches, IsString } from "class-validator";

export class RegisterDto {
    @ApiProperty({
        description: 'The email address of the user',
        required: false,
    })
    @IsEmail()
    @IsOptional()
    email?: string;

    @ApiProperty({
        description: 'The password of the user',
        minLength: 6,
    })
    @IsNotEmpty({ message: ' password is required.' })
    @MinLength(6, {
        message: 'Password must be at least 6 characters long.',
    })
    @MaxLength(20, {
        message: 'Password cannot be longer than 20 characters.',
    })
    @Matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/,
        {
            message:
                'Password should contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.',
        },
    )
    @IsString()
    @MinLength(6)
    password?: string;

    @ApiProperty({
        description: 'The name of the user',
        required: false,
    })
    @IsOptional()
    @IsString()
    name?: string;
}