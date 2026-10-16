import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const possibleLocations = [
  path.resolve(__dirname, 'dist/apps/web/server/index.js'),
  path.resolve(__dirname, 'build/server/index.js'),
  path.resolve(__dirname, 'build/index.js'),
];

const serverBuild = possibleLocations.find(loc => fs.existsSync(loc)) || possibleLocations[0];

const possibleCli = [
  path.resolve(__dirname, 'node_modules/@react-router/serve/bin.cjs'),
  path.resolve(__dirname, 'apps/web/node_modules/@react-router/serve/bin.cjs'),
];

const cliPath = possibleCli.find(p => fs.existsSync(p)) || 'react-router-serve';

const child = spawn(process.execPath, [cliPath, serverBuild], {
  stdio: 'inherit',
  env: process.env,
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
