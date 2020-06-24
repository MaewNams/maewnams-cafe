import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';
import * as Joi from '@hapi/joi';
import gql from 'graphql-tag';
import {
  IHTTPResult,
  HTTPResultObjectValidate,
} from '@maewnams-cafe/model-lib';

export interface IBook extends Document {
  id: number;
  title: String;
  author: String;
}

export interface IBookAction {
  result: IHTTPResult;
}

export interface IBookInfo {
  total: number;
}

export const BookSchemaModel = mongoose.model<IBook>(
  'books',
  new Schema({
    title: String,
    author: String,
  })
);

export const BookTypeDefs = gql`
  "Book Schema"
  type BookModel {
    id: Int
    title: String
    author: String
  }

  type BookAction {
    result: BookModel
    bookInfo: BookInfo
  }

  type BookInfo {
    total: Int
  }

  input BookModelInput {
    id: Int
    title: String
    author: String
  }

  type Query {
    getBooks: [BookModel]
    # getTotalBook: HTTPResult
    # getBookByID(id: String): BookModel
  }
`;

export const bookObjectValidate = {
  id: Joi.number().required(),
  title: Joi.string().required(),
  author: Joi.string().required(),
};

export const bookInfoObjectValidate = {
  total: Joi.number().required(),
};

export const bookActionObjectValidate = {
  result: Joi.object(HTTPResultObjectValidate),
};
