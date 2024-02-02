/* eslint-disable linebreak-style */
const express = require('express');

const hostname = 'localhost';
const port = 1245;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, hostname, () => {
  console.log('...');
});

module.exports = app;
