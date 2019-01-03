const {ObjectID} = require('mongodb');
var {mongoose} = require("./../server/db/mongoose");
var {Todo} = require("./../server/models/todo");
var {Users} = require("./../server/models/user");

// var id = '5c2e2a38ee77bf10bc4f5023';
//
// if(!ObjectID.isValid(id)){
//   console.log('id not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('todos', todos);
// })
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//   console.log('todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('id not found');
//   }
//   console.log('todo by id', todo);
// }).catch((e) => console.log(e));

var id = '5c2b658e9260cd0a8072dfae';

Users.findById(id).then((user) => {
  if(!user){
    return console.log('id not found');
  }
  console.log('user by id', user);
}).catch((e) => console.log(e));
