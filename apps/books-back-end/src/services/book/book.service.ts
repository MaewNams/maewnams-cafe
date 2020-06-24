import { IBook, BookSchemaModel } from '@maewnams-cafe/book-model-lib';
import * as book from '../../data/book';

export const getBooks = async (): Promise<[IBook]> => {
  return await book.getBooks();
};
