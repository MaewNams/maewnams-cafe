import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[maewnamsCafePhoneValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneValidationHelper,
      multi: true,
    },
  ],
})
export class PhoneValidationHelper implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    if (
      control.value &&
      control.value.length != 10 &&
      control.value.pattern('^[0-9]*$')
    ) {
      return { phoneNumberInvalid: true };
    }
    return null;
  }
}
