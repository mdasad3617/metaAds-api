import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class EmailOrPhoneConstraint implements ValidatorConstraintInterface {
    validate(_: any, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare function EmailOrPhone(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
