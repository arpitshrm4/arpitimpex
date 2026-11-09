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
app.enable('trust proxy');
app.use(compression());

// 301 Permanent redirect for www host and non-HTTPS to canonical non-www HTTPS host
app.use((req, res, next) => {
  const host = req.headers.host || '';
  const isWww = host.startsWith('www.');
  const proto = req.headers['x-forwarded-proto'] || (req.secure ? 'https' : 'http');
  const isHttp = proto === 'http';

  if (isWww || isHttp) {
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
app.use(
  '/images',
  express.static(path.join(clientBuildPath, 'images'), {
    immutable: true,
    maxAge: '30d',
  })
);
app.use(express.static(clientBuildPath, { maxAge: '1h', index: false }));

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
