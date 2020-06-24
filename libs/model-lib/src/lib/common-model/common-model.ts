import * as Joi from '@hapi/joi';
import gql from 'graphql-tag';

export const CommonTypeDefs = gql`
  type HTTPResult {
    status: Int
    value: String!
    expiresAt: String
  }
`;

export interface IHTTPResult {
  statis: number;
  value: any;
  expireAt?: string;
}

export const IDObjectValidate = {
  id: Joi.string().required(),
};

export const HTTPResultObjectValidate = {
  status: Joi.number().required(),
  value: Joi.any().required(),
  expireAt: Joi.string(),
};
