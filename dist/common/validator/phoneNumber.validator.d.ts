import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class IsPhoneNumberConstraint implements ValidatorConstraintInterface {
    validate(phoneNumber: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
