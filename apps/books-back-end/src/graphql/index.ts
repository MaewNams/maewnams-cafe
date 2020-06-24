import * as _ from 'lodash';

import { bookResolver } from '../controller/book';
import { BookTypeDefs } from '@maewnams-cafe/book-model-lib';

export const resolvers = _.merge(bookResolver);
export const typeDefs = [BookTypeDefs];
