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
    const posts = await mongndbQueryWithPromise('find', {});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.post('/api/posts', async (req, res) => {
  if (req.body.skill) {
    const score = 0;
    const post = { ...req.body, score };
    await mongndbQueryWithPromise('insertOne', post);
    res.status(201).json('Post success!');
  } else {
    res.status(400).end();
  }
});

// app.put('/api/posts/:id/:score/:vote', async (req, res) => {
//   const { id, score, vote } = req.params;
//   const sqlSelectById = `select * from posts  where id=${id}`;
//   if (vote === 'downvote') {
//     const sqlDownvote = `UPDATE posts SET score=score-1 WHERE id=${id}`;
//     await queryWithPromise(sqlDownvote);
//   } else if (vote === 'upvote') {
//     const sqlUpvote = `UPDATE posts SET score=score+1 WHERE id=${id}`;
//     await queryWithPromise(sqlUpvote);
//   }
//   const response = await queryWithPromise(sqlSelectById);
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json');
//   res.end(JSON.stringify(response[0]));
// });

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at ${port}`);
});
