// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb'); // a new feature in ES6 that enable us easily
                                                  // create variables from distructuring the object

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    console.log(err);
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     console.log('unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Ahmed',
  //   age: 24,
  //   location: 'Tripoli'
  // }, (err, result) => {
  //   if(err){
  //     console.log('unable to insert Users', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  db.close();
});
