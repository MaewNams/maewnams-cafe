import * as express from 'express';
import { Express } from 'express';

import * as morgan from 'morgan';
import { environment } from '../environments/environment';

export const setupAppServerConnection = (app: Express) => {
  if (!environment.production) {
    app.use(morgan('tiny'));
  }
  const port = environment.port;
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
  server.on('error', console.error);
};
