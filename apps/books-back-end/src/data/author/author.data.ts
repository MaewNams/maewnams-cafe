import { PostgresHelper } from '@maewnams-cafe/book-back-end-helpers';
import { IAuthor } from '@maewnams-cafe/author-model-lib';
import {
  PGConnection,
  PGConectionWrite,
} from '../../connections/postgres.connection';
import { resolvers } from '../../graphql';

const TABLE = 'authors';
export async function getAuthors(): Promise<any> {
  return new Promise<IAuthor>((resolve, reject) => {
    const SQL = `SELECT * FROM ${TABLE}`;

    const data = PostgresHelper.execQuery<IAuthor>(
      PGConnection.connector,
      SQL,
      []
    );
    data.then((result) => resolve(result)).catch((err) => reject(err));
  });
}

export async function getAuthorByID(authorID: String): Promise<IAuthor> {
  return new Promise<IAuthor>((resolve, reject) => {
    const SQL = `SELECT * FROM ${TABLE} WHERE id = '${authorID}' LIMIT 1`;
    const client = PGConnection.connect();
    client.query(SQL, (err, res) => {
      if (err) reject(err);
      if (res.rowCount === 0) resolve(null);
      if (res.rowCount === 1) resolve(res.rows[0]);
    });
  });
}

export async function addAuthor(
  authorID: String,
  name: String
): Promise<IAuthor> {
  return new Promise(async (resolve, reject) => {
    try {
      const SQL = `
        INSERT INTO ${TABLE} (id, name)
        VALUES ('${authorID}', '${name}')
       `;
      const insert = await PostgresHelper.execQuery<IAuthor>(
        PGConnection.connector,
        SQL,
        []
      );
      const author = await getAuthorByID(authorID);
      resolve(author);
    } catch (err) {
      reject(err);
    }
  });
}
