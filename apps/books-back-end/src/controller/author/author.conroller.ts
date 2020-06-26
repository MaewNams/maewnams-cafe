import { getAuthors, getAuthorByID, addAuthor } from '../../services/author';
import { graphQLHandler } from '../graphql-handler';
import {
  validateResponseAuthors,
  validateResponseAuthor,
} from '../../schema/author';
import { IAuthor } from '@maewnams-cafe/author-model-lib';

class AuthorManagement {
  async getAuthorsHandler(parent, args, context): Promise<[IAuthor]> {
    return await getAuthors();
  }

  async getAuthorByIDHandler(parent, args, context): Promise<IAuthor> {
    const { authorID } = args;
    console.log('getAuthorByID');
    return await getAuthorByID(authorID);
  }

  async addAuthorHandler(parent, args, context): Promise<IAuthor> {
    const { authorID, name } = args;
    console.log('add authior');
    return await addAuthor(authorID, name);
  }
}

const authorManagement: AuthorManagement = new AuthorManagement();
export const authorResolver = {
  Query: {
    getAuthors: graphQLHandler({
      handler: authorManagement.getAuthorsHandler,
      validator: validateResponseAuthors,
    }),
    getAuthorByID: graphQLHandler({
      handler: authorManagement.getAuthorByIDHandler,
      validator: validateResponseAuthor,
    }),
  },
  Mutation: {
    addAuthor: graphQLHandler({
      handler: authorManagement.addAuthorHandler,
      validator: validateResponseAuthor,
    }),
  },
};
