import * as _ from 'lodash';

import { authorResolver } from '../controller/author';
import { AuthorTypeDefs } from '@maewnams-cafe/author-model-lib';
import { bookResolver } from '../controller/book';
import { BookTypeDefs } from '@maewnams-cafe/book-model-lib';

export const resolvers = _.merge(bookResolver, authorResolver);
export const typeDefs = [BookTypeDefs, AuthorTypeDefs];
