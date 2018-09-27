// const mongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    const db = client.db('TodoApp');

    db.collection('Todos').insertOne(
      {
        text: 'Something to do',
        completed: false
      },
      (err, result) => {
        if (err) {
          return console.log('Unable to insert todo', err);
        }
        console.log(result.ops);
      }
    );
    db.collection('Users').insertOne(
      {
        name: 'Dim',
        age: 24,
        location: 'spb'
      },
      (err, result) => {
        if (err) {
          return console.log('Unable to insert user', err);
        }
        console.log(result.ops[0]._id.getTimestamp());

        client.close();
      }
    );
  }
);
