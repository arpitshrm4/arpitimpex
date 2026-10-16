import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import express from 'express';
import compression from 'compression';
import { createRequestHandler } from '@react-router/express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const serverBuildPath = fs.existsSync(path.resolve(__dirname, 'dist/apps/web/server/index.js'))
  ? path.resolve(__dirname, 'dist/apps/web/server/index.js')
  : path.resolve(__dirname, 'build/server/index.js');

const clientBuildPath = fs.existsSync(path.resolve(__dirname, 'dist/apps/web/client'))
  ? path.resolve(__dirname, 'dist/apps/web/client')
  : path.resolve(__dirname, 'build/client');

const build = await import(serverBuildPath);

const app = express();
app.disable('x-powered-by');
app.use(compression());

// 301 Permanent redirect for www host to non-www canonical host
app.use((req, res, next) => {
  const host = req.headers.host || '';
  if (host.startsWith('www.')) {
    const cleanHost = host.replace(/^www\./, '');
    return res.redirect(301, `https://${cleanHost}${req.originalUrl}`);
  }
  next();
});

app.use(
  '/assets',
  express.static(path.join(clientBuildPath, 'assets'), {
    immutable: true,
    maxAge: '1y',
  })
);
app.use(express.static(clientBuildPath, { maxAge: '1h' }));

app.all(
  '/{*splat}',
  createRequestHandler({
    build,
    mode: process.env.NODE_ENV ?? 'production',
  })
);

const port = Number(process.env.PORT) || 3000;
const server = app.listen(port, () => {
  console.log(`[Hostinger Node.js] Server is listening on port ${port}`);
});

process.on('SIGTERM', () => server.close());
process.on('SIGINT', () => server.close());

export default app;
