require('dotenv').config();
const express = require('express');
const { findWithPromise, insertWithPromise } = require('./db.js');

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

app.get('/api/posts', async (req, res) => {
  const posts = await findWithPromise();
  const result = await posts.toArray();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(result);
});

app.post('/api/posts', async (req, res) => {
  if (req.body.title) {
    const timestamp = new Date().getTime();
    const post = { ...req.body, timestamp };
    await insertWithPromise(post);
    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.end('Post success!');
  } else {
    res.statusCode = 400;
    res.end();
  }
});

// const get = async () => {
//   const result =  await queryWithPromise({}, 'find');
// };


// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// const promiseFind = (data, action) => new Promise((resolve, reject) => {
//   client.connect(async (err) => {
//     if (err) {
//       reject(err);
//     }
//     console.log('MongoDB connected!');
//     // const cursor = collection[action](data);
//     const result = client.db('reddit').collection('posts')[action](data);
//     client.close();
//     resolve(result);
//   });
// });

// // (async (condition) => {
// //   const result = await promiseFind(condition);
// //   console.log(result);
// // })({});

// // promiseFind({ x: 1, y: 2 }, 'insertOne');
// promiseFind({}, 'find').then((result) => { console.log(result.toArray()); });
