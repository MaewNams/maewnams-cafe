import { IAuthor } from '@maewnams-cafe/author-model-lib';
import * as author from '../../data/author';

export const getAuthors = async (): Promise<[IAuthor]> => {
  return await author.getAuthors();
};

export const getAuthorByID = async (authorID: String): Promise<IAuthor> => {
  return await author.getAuthorByID(authorID);
};

export const addAuthor = async (
  authorID: String,
  name: String
): Promise<IAuthor> => {
  return await author.addAuthor(authorID, name);
};
