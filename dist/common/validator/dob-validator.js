"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsAdult = IsAdult;
const class_validator_1 = require("class-validator");
const dayjs = require("dayjs");
function IsAdult(minAge = 18, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isAdult',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    if (!value)
                        return false;
                    const dob = dayjs(value);
                    const today = dayjs();
                    return today.diff(dob, 'year') >= minAge;
                },
                defaultMessage(args) {
                    return `${args.property} must indicate age of at least ${minAge} years`;
                },
            },
        });
    };
}
//# sourceMappingURL=dob-validator.js.map