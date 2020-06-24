import { PGConnection } from './postgres.connection';
export const setupConnection = async () => {
  PGConnection.connect();
};
