// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb'); // a new feature in ES6 that enable us easily
                                                  // create variables from distructuring the object

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    console.log(err);
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5c2946d3513a698486387916')
  //   }).toArray().then((docs)=>{
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('unable to fetch todo', err);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //     console.log(`Todos count: ${count}`);
  // },(err) => {
  //   console.log('unable to fetch todo', err);
  // });

  db.collection('Users').find({name: 'Ahmed'}).toArray().then(function(docs){
    console.log(JSON.stringify(docs, undefined, 2));
  }, function(err){
    console.log('unable to fetch todo', err);
  });

  // db.close();
});
