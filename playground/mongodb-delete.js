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
    //   .deleteMany({ text: 'Fuck neighbours dog' })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection('Todos')
    //   .findOneAndDelete({ complete: false })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection('Users')
    //   .deleteMany({ name: "Dim" })
    //   .then(res => {
    //     console.log(res);
    //   });

    db.collection('Users')
      .findOneAndDelete({ _id: ObjectID('5babd97743eb24b93b792ae9') })
      .then(res => {
        console.log(res);
      });

    // client.close();
  }
);
