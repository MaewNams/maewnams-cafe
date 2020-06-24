import { validate } from '@maewnams-cafe/book-back-end-helpers';
import { HTTPResultObjectValidate } from '@maewnams-cafe/model-lib';

export function validateResponseHTTPObject<T>(data: T): T {
  return validate<T>(HTTPResultObjectValidate, data);
}
