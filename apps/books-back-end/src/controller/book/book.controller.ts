import { getBooks, getBookByID, addBook } from '../../services/book';
import { graphQLHandler } from '../graphql-handler';
import {
  validateResponseBooks,
  validateResponseBook,
  validateResponseBookInfo,
} from '../../schema/book';
import { IBook } from '@maewnams-cafe/book-model-lib';
// Import validate from schema

class BookManagement {
  async getBooksHandler(parent, args, context): Promise<[IBook]> {
    console.log('In getBookHandler');
    return await getBooks();
  }

  async getBookByIDHandler(parent, args, context): Promise<IBook> {
    console.log('In getBookByIDHandler');
    const { bookID } = args;
    return await getBookByID(bookID);
  }

  async addBookHandler(parent, args, context): Promise<IBook> {
    console.log('In addBookHandler');
    const { bookID, title, author } = args;
    return await addBook(bookID, title, author);
  }
}

const bookManagement: BookManagement = new BookManagement();
export const bookResolver = {
  Query: {
    getBooks: graphQLHandler({
      handler: bookManagement.getBooksHandler,
      validator: validateResponseBooks,
    }),
    getBookByID: graphQLHandler({
      handler: bookManagement.getBookByIDHandler,
      validator: validateResponseBook,
    }),
  },
  Mutation: {
    addBook: graphQLHandler({
      handler: bookManagement.addBookHandler,
      validator: validateResponseBook,
    }),
  },
};
