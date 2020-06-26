import { validate, validateArray } from '@maewnams-cafe/book-back-end-helpers';
import { authorObjectValudate } from '@maewnams-cafe/author-model-lib';

export function validateResponseAuthors<T>(data: T): T {
  return validateArray(authorObjectValudate, data);
}

export function validateResponseAuthor<T>(data: T): T {
  return validate(authorObjectValudate, data);
}
