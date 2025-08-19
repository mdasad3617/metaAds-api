import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';
import * as dayjs from 'dayjs';

export function IsAdult(minAge = 18, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isAdult',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (!value) return false;
          const dob = dayjs(value);
          const today = dayjs();
          return today.diff(dob, 'year') >= minAge;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must indicate age of at least ${minAge} years`;
        },
      },
    });
  };
}
