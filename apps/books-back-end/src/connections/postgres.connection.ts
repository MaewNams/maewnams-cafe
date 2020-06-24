import { environment } from '../environments/environment';
const { Pool } = require('pg');

class PGConnectionSingletonRead {
  public static instance;
  public connector;
  public static getInstance() {
    if (!PGConnectionSingletonRead.instance) {
      PGConnectionSingletonRead.instance = new PGConnectionSingletonRead();
    }
    return PGConnectionSingletonRead.instance;
  }

  public connect() {
    this.connector = new Pool({ connectionString: environment.PG_URL });
    return this.connector;
  }
}

class PGConnectionSingletonWrite {
  public static instance;
  public connector;
  public static getInstance() {
    if (!PGConnectionSingletonWrite.instance) {
      PGConnectionSingletonWrite.instance = new PGConnectionSingletonWrite();
    }
    return PGConnectionSingletonWrite.instance;
  }

  public connect() {
    this.connector = new Pool({ connectionString: environment.PG_URL });
    return this.connector;
  }
}

export const PGConnection = PGConnectionSingletonRead.getInstance();
export const PGConectionWrite = PGConnectionSingletonWrite.getInstance();
