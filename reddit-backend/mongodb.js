// require('dotenv').config();
const { MongoClient } = require('mongodb');
const { MONGODBUSERNAME, MONGODBPASSWORD } = require('./config');

const username = MONGODBUSERNAME;
const password = MONGODBPASSWORD;
const uri = `mongodb+srv://${username}:${password}@cluster0-rlq64.azure.mongodb.net/test?retryWrites=true&w=majority`;


const mongndbQueryWithPromise = (queryMethod, queryInput) => new Promise(
  (resolve, reject) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    client.connect(async (error, connection) => {
      if (error) reject(error);
      let result = connection.db('reddit').collection('posts')[queryMethod](queryInput);
      if (queryMethod === 'find') {
        result = await result.toArray();
      }
      client.close();
      resolve(result);
    });
  },
);

module.exports = mongndbQueryWithPromise;
