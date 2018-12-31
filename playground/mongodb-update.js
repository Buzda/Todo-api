// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb'); // a new feature in ES6 that enable us easily
                                                  // create variables from distructuring the object

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    console.log(err);
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c2a21ba513a698486387ced')
  //     },
  //    {
  //     $set:{
  //       completed: true
  //     }
  //    },
  //     {
  //       returnOriginal: false
  //     }).then((result) => {
  //    console.log(result);
  //  });

  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID('5c2942a3ad6edf07840565c3')
  //     },
  //    {
  //     $set:{
  //       name: 'Ahmed'
  //     }
  //    },
  //     {
  //       returnOriginal: false
  //     }).then((result) => {
  //    console.log(result);
  //  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c2942a3ad6edf07840565c3')
      },
     {
      $inc:{
        age: -2
      }
     },
      {
        returnOriginal: false
      }).then((result) => {
     console.log(result);
   });

  // db.close();
});
