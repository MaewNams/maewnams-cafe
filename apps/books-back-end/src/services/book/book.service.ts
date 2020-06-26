import { IBook, BookSchemaModel } from '@maewnams-cafe/book-model-lib';
import * as book from '../../data/book';

export const getBooks = async (): Promise<[IBook]> => {
  return await book.getBooks();
};

export const getBookByID = async (bookID: Number): Promise<IBook> => {
  return await book.getBookByID(bookID);
};

export const addBook = async (
  bookID: Number,
  title: String,
  author: String
): Promise<IBook> => {
  return await book.addBook(bookID, title, author);
};
