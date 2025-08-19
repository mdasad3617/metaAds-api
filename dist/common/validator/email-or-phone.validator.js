"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailOrPhoneConstraint = void 0;
exports.EmailOrPhone = EmailOrPhone;
const class_validator_1 = require("class-validator");
let EmailOrPhoneConstraint = class EmailOrPhoneConstraint {
    validate(_, args) {
        const dto = args.object;
        return !!(dto.email || dto.phoneNumber);
    }
    defaultMessage(args) {
        return 'Either email or phoneNumber must be provided';
    }
};
exports.EmailOrPhoneConstraint = EmailOrPhoneConstraint;
exports.EmailOrPhoneConstraint = EmailOrPhoneConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'EmailOrPhone', async: false })
], EmailOrPhoneConstraint);
function EmailOrPhone(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: EmailOrPhoneConstraint,
        });
    };
}
//# sourceMappingURL=email-or-phone.validator.js.map