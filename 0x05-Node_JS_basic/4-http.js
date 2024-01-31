/* eslint-disable linebreak-style */
const http = require('http');

const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/':
      res.end('Hello Holberton School!');
      break;
    default:
      res.end();
  }
});

app.listen(port, hostname, () => {
  console.log('Hello Holberton School!');
});

export default app;
