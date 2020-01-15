require('dotenv').config();
const express = require('express');
const mongndbQueryWithPromise = require('./mongodb.js');

const port = process.env.PORT;

const app = express();
app.use(express.json());


app.get('/api/posts', async (req, res) => {
  const posts = await mongndbQueryWithPromise('find', {});
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(posts);
});

app.post('/api/posts', async (req, res) => {
  if (req.body.title) {
    const timestamp = new Date().getTime();
    const post = { ...req.body, timestamp };
    await mongndbQueryWithPromise('insertOne', post);
    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.end('Post success!');
  } else {
    res.statusCode = 400;
    res.end();
  }
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at ${port}`);
});
