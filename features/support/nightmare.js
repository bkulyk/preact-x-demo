/* eslint no-console: off */
const Nightmare = require('nightmare');
const express = require('express');
const path = require('path');
const requireText = require('require-text');
const { port } = require('./config');

const index = requireText('../../dist/index.html', require);

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = false;

const app = express();
const nightmare = Nightmare({
  show: false,
  typeInterval: 3,
});

nightmare.on('console', (type, message) => {
  console.log(`nightmare console.${type} ---`, message, '---');
});

app.use(express.static(path.join(__dirname, '../../dist')));
// render index.html for 404, needed for react routing
app.get('*', (_req, res) => {
  res.send(index);
});

const beforeAll = async (ctx) => {
  ctx.server = await app.listen(`${port}`);
};

const afterAll = async (ctx) => {
  await ctx.server.close();
  nightmare.end();
};

module.exports = {
  beforeAll,
  afterAll,
  nightmare,
};
