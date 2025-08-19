import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { isValidPhoneNumber } from 'libphonenumber-js';

@ValidatorConstraint({ name: 'isPhoneNumber', async: false })
export class IsPhoneNumberConstraint implements ValidatorConstraintInterface {
  validate(phoneNumber: string, args: ValidationArguments) {
    // Check if the phone number starts with a '+' and contains only digits after it
    const phoneRegex = /^\+\d+$/;
    if (!phoneRegex.test(phoneNumber)) {
      return false;
    }

    // Validate phone number using libphonenumber-js
    try {
      return isValidPhoneNumber(phoneNumber);
    } catch (error) {
      return false;
    }
  }

  defaultMessage(args: ValidationArguments) {
    return 'Phone number must include a valid country code (e.g., +1234567890) and contain only digits.';
  }
}