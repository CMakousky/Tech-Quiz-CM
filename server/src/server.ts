// import type { Request, Response } from 'express';
import express from 'express';
import path from 'node:path';
import db from './config/connection.js';
import routes from './routes/index.js';

import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

await db();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/dist')));

  // app.get('*', (_req: Request, res: Response) => {
  //   res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  // });
};

app.use(routes);

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
