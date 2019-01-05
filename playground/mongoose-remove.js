const {ObjectID} = require('mongodb');
var {mongoose} = require("./../server/db/mongoose");
var {Todo} = require("./../server/models/todo");
var {Users} = require("./../server/models/user");
//
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '5c310015a55c0809c92f0487'}).then((todo) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('5c310015a55c0809c92f0487').then((todo) => {
  console.log(todo);
});
