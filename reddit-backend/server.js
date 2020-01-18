require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongndbQueryWithPromise = require('./mongodb.js');

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('./dist/frontend'));

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await mongndbQueryWithPromise('find', []);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.post('/api/posts', async (req, res) => {
  if (req.body.skill) {
    const score = 0;
    const post = { ...req.body, score };
    await mongndbQueryWithPromise('insertOne', [post]);
    res.status(201).json('Post success!');
  } else {
    res.status(400).end();
  }
});

app.put('/api/posts/:skill/:vote', async (req, res) => {
  const { skill, vote } = req.params;
  const changeAmount = (vote === 'downvote') ? -1 : 1;
  await mongndbQueryWithPromise('updateOne', [
    { skill },
    { $inc: { score: changeAmount } },
  ]);
  res.status(200).end();
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at ${port}`);
});
