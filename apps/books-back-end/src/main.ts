/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { setupAppServerConnection } from './connections/app.connection';
import { graphQLRouteRegister } from './routes';
import { setupConnection } from './connections/setup.connection';

const app = express();
setupConnection().then(() => {
  graphQLRouteRegister(app);
  setupAppServerConnection(app);
});
