import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
  MaxLength,
  MinLength,
} from "class-validator";

export class AuthSignUpDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      "Passwords should contain at least 1 upper case letter|" +
      "Passwords should contain at least 1 lower case letter|" +
      "Passwords should contain at least 1 number or special character",
  })
  password: string;
}

export class AuthSignInDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      "Passwords should contain at least 1 upper case letter|" +
      "Passwords should contain at least 1 lower case letter|" +
      "Passwords should contain at least 1 number or special character",
  })
  password: string;
}

export class AuthAuthenticateDto {
  @IsNotEmpty()
  @Length(6, 6)
  @IsString()
  authenticator_code: string;
}
