import { validate, validateArray } from '@maewnams-cafe/book-back-end-helpers';
import { HTTPResultObjectValidate } from '@maewnams-cafe/model-lib';
import {
  bookObjectValidate,
  bookInfoObjectValidate,
} from '@maewnams-cafe/book-model-lib';

export function validateResponseBooks<T>(data: T): T {
  return validateArray(bookObjectValidate, data);
}

export function validateResponseBook<T>(data: T): T {
  return validate(bookObjectValidate, data);
}

export function validateResponseBookInfo<T>(data: T): T {
  return validate(bookInfoObjectValidate, data);
}
