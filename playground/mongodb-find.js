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

    // db.collection('Todos')
    //   .find({ _id: ObjectID('5babd1fc43eb24b93b792917') })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log('Todos');
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log('Unable to fetch todos', err);
    //     }
    //   );

    db.collection('Users')
      .find({ name: 'Dim' })
      .toArray()
      .then(
        user => {
          // console.log(`Found ${batchSize} users with the name \"${find.name}\"`);
          console.log(JSON.stringify(user, undefined, 2));
        },
        err => {
          console.log('Unable to fetch users', err);
        }
      );

    // db.collection('Todos')
    //   .find({})
    //   .count()
    //   .then(
    //     count => {
    //       console.log(`Todos count: ${count}`);
    //     },
    //     err => {
    //       console.log('Unable to fetch todos', err);
    //     }
    //   );

    // client.close();
  }
);
