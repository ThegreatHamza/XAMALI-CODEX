import { access } from 'node:fs/promises';

const required = [
  'vendor/www/en/index.html',
  'vendor/www/fr/index.html',
  'vendor/www/ar/index.html',
  'vendor/www/assets/styles.css',
  'vendor/server.mjs'
];

for (const file of required) {
  await access(file);
}

console.log('Vendored files check passed.');
