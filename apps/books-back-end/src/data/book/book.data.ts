import { PostgresHelper } from '@maewnams-cafe/book-back-end-helpers';
import { IBook, BookSchemaModel } from '@maewnams-cafe/book-model-lib';
import {
  PGConnection,
  PGConectionWrite,
} from '../../connections/postgres.connection';
import { resolvers } from '../../graphql';
import { IHTTPResult } from '@maewnams-cafe/model-lib';

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

export async function getBookByID(bookID: Number): Promise<IBook> {
  return new Promise<IBook>((resolve, reject) => {
    const SQL = `SELECT * FROM ${TABLE} WHERE id = ${bookID} LIMIT 1`;
    const client = PGConnection.connect();
    client.query(SQL, (err, res) => {
      if (err) reject(err);
      if (res.rowCount === 0) resolve(null);
      if (res.rowCount === 1) resolve(res.rows[0]);
    });
  });
}

export async function addBook(
  bookID: Number,
  title: String,
  author: String
): Promise<IBook> {
  return new Promise(async (resolve, reject) => {
    try {
      const SQL = `
        INSERT INTO ${TABLE} (id, title, author)
        VALUES (${bookID}, '${title}', '${author}')
       `;
      const insert = await PostgresHelper.execQuery<IBook>(
        PGConnection.connector,
        SQL,
        []
      );
      const book = await getBookByID(bookID);
      resolve(book);
    } catch (err) {
      reject(err);
    }
  });
}
