import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from '../graphql';

export const graphQLRouteRegister = (app) => {
  const server = new ApolloServer({ typeDefs, resolvers });

  server.applyMiddleware({ app });
};
