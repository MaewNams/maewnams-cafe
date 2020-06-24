import { getBooks } from '../../services/book';
import { graphQLHandler } from '../graphql-handler';
import { validateResponseBooks } from '../../schema/book';
import { IBook } from '@maewnams-cafe/book-model-lib';
// Import validate from schema

class BookManagement {
  async getBooksHandler(parent, args, context): Promise<[IBook]> {
    console.log('hello');
    return await getBooks();
  }
}

const bookManagement: BookManagement = new BookManagement();
export const bookResolver = {
  Query: {
    getBooks: graphQLHandler({
      handler: bookManagement.getBooksHandler,
      validator: validateResponseBooks,
    }),
  },
};
