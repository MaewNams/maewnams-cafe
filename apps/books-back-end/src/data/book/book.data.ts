import { PostgresHelper } from '@maewnams-cafe/book-back-end-helpers';
import { IBook, BookSchemaModel } from '@maewnams-cafe/book-model-lib';
import { PGConnection } from '../../connections/postgres.connection';
import { resolvers } from '../../graphql';

const TABLE = 'books';
export async function getBooks(): Promise<any> {
  return new Promise<IBook>((resolve, reject) => {
    const SQL = `SELECT * FROM ${TABLE}`;

    const data = PostgresHelper.execQuery<IBook>(
      PGConnection.connector,
      SQL,
      []
    );
    data.then((result) => resolve(result)).catch((err) => reject(err));
  });
}
