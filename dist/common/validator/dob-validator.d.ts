import { ValidationOptions } from 'class-validator';
export declare function IsAdult(minAge?: number, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
