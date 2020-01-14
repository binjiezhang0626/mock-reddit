require('dotenv').config();
const { MongoClient } = require('mongodb');

const username = process.env.MONGODBUSERNAME;
const password = process.env.MONGODBPASSWORD;
const uri = `mongodb+srv://${username}:${password}@cluster0-rlq64.azure.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useUnifiedTopology: true });

const findWithPromise = () => new Promise((resolve, reject) => {
  client.connect((err) => {
    if (err) {
      reject(err);
    }
    console.log('MongoDB connected!');
    const result = client.db('reddit').collection('posts').find({});
    // client.close();
    resolve(result);
  });
});

const insertWithPromise = (data) => new Promise((resolve, reject) => {
  client.connect((err) => {
    if (err) {
      reject(err);
    }
    console.log('MongoDB connected!');
    const result = client.db('reddit').collection('posts').insertOne(data);
    resolve(result);
  });
});

module.exports = {
  findWithPromise,
  insertWithPromise,
};
