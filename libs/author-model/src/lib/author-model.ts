import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';
import * as Joi from '@hapi/joi';
import gql from 'graphql-tag';

export interface IAuthor extends Document {
  id: string;
  name: string;
}

export const AuthorSchemaModel = mongoose.model<IAuthor>(
  'authors',
  new Schema({
    name: String,
  })
);

export const AuthorTypeDefs = gql`
  "Author Schema"
  type AuthorModel {
    id: String
    name: String
  }

  input AuthorModelInput {
    id: String
    name: String
  }

  extend type Query {
    getAuthors: [AuthorModel]
  }

  extend type Mutation {
    addAuthor(author: AuthorModelInput): AuthorModel
  }
`;

export const authorObjectValudate = {
  id: Joi.string().required(),
  name: Joi.string().required(),
};
