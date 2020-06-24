export class PostgresHelper {
  constructor() {}
  public static execQuery<T>(
    pool,
    query: string,
    param: Array<any>
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      pool.connect((err, client, done) => {
        if (err) throw err; // not connected!
        client.query(query, param, (err_query, result) => {
          done();
          console.log(' query done: ');
          if (err_query) {
            reject(err_query);
          } else {
            if (result.rowCount > 0) {
              resolve(result.rows);
            } else {
              resolve({} as T);
            }
          }
        });
      });
    });
  }
  public static execSingleWrite<T>(
    pool,
    query,
    params: Array<any>
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      pool.connect((err, client, done) => {
        if (err) throw err; // not connected!
        const shouldAbort = (err_abort) => {
          if (err_abort) {
            client.query('ROLLBACK', (err_rollback) => {
              if (err_rollback) {
                done();
                console.error('Error rolling back client', err_rollback.stack);
                reject(err_rollback);
              }
            });
          }
          return !!err_abort;
        };

        client.query('BEGIN', (err_begin_transaction) => {
          if (shouldAbort(err_begin_transaction)) reject(err_begin_transaction);
          client.query(query, params, (err_query, res_query) => {
            if (shouldAbort(err_query)) reject(err_query);
            client.query('COMMIT', (err_commit) => {
              done();
              if (err_commit) {
                console.error('Error committing transaction', err_commit.stack);
                reject(err_commit);
              }
              resolve(res_query.rows[0]);
            });
          });
        });
      });
    });
  }
  public static execQueryTransaction(
    pool,
    firstQuery,
    firstParams,
    secoundQuery,
    secoundParams
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      pool.connect((err, client, done) => {
        if (err) throw err; // not connected!
        const shouldAbort = (err_abort) => {
          if (err_abort) {
            client.query('ROLLBACK', (err_rollback) => {
              if (err_rollback) {
                done();
                console.error('Error rolling back client', err_rollback.stack);
                reject(err_rollback);
              }
            });
          }
          return !!err_abort;
        };
        client.query('BEGIN', (err_begin_transaction) => {
          if (shouldAbort(err_begin_transaction)) reject(err_begin_transaction);
          client.query(firstQuery, (err_query_1, res_query_1) => {
            if (shouldAbort(err_query_1)) reject(err_query_1);
            client.query(secoundQuery, (err_query_2, res_query_2) => {
              if (shouldAbort(err_query_2)) reject(err_query_2);
              client.query('COMMIT', (err_commit) => {
                done();
                if (err_commit) {
                  console.error(
                    'Error committing transaction',
                    err_commit.stack
                  );
                  reject(err_commit);
                }
                resolve(true);
              });
            });
          });
        });
      });
    });
  }

  public static execDynamicQueryTransaction(pool, queries) {
    return new Promise((resolve, reject) => {
      pool.connect((err, client, done) => {
        if (err) throw err; // not connected!
        const shouldAbort = (err_abort) => {
          if (err_abort) {
            client.query('ROLLBACK', (err_rollback) => {
              if (err_rollback) {
                done();
                console.error('Error rolling back client', err_rollback.stack);
                reject(err_rollback);
              }
            });
          }
          return !!err_abort;
        };

        const queryResult = [];
        client.query('BEGIN', (err_begin_transaction) => {
          if (shouldAbort(err_begin_transaction)) reject(err_begin_transaction);

          for (let i = 0; i < queries.length; i++) {
            const query = queries[i];
            client.query(query, (loop_err, loop_res) => {
              if (shouldAbort(loop_err)) {
                console.log('ERROR ON ', i);
                console.log('ERROR');
                reject(loop_err);
              }
              queryResult.push(loop_res.rows[0]);
            });
          }

          client.query('COMMIT', (err_commit) => {
            done();
            if (err_commit) {
              console.error('Error committing transaction', err_commit.stack);
              reject(err_commit);
            }
            resolve(queryResult);
          });
        });
      });
    });
  }
}
