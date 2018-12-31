// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb'); // a new feature in ES6 that enable us easily
                                                  // create variables from distructuring the object

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    console.log(err);
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //    console.log(result);
  //  });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //    console.log(result);
  //  });

  // db.collection('Users').deleteMany({name: 'Ahmed'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5c2943a5b1cbfc07886cabad')}).then((result) => {
     console.log(result);
   });

  // db.close();
});
