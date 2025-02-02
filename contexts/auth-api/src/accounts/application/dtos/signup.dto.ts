import { IsEmail, IsNotEmpty, Matches, MaxLength, MinLength } from 'class-validator';

export class SignUpDto {
	// @ApiProperty()
	@IsNotEmpty()
	@IsEmail()
	email: string;

	@IsNotEmpty()
	@MinLength(8)
	@MaxLength(16)
	@Matches(/\d/, { message: 'must contain at least one number' })
	@Matches(/[A-Z]/, { message: 'must contain at least one uppercase letter' })
	password: string;
	constructor() {}
}
