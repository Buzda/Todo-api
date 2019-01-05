var expect = require('expect');
var request = require('supertest');

var {app} = require('./../server');
var {Todo} = require('./../models/todo');

const {ObjectID} = require('mongodb');

const todos = [{
  _id: new ObjectID(),
  text: 'first test todo'
},
{
  _id: new ObjectID(),
  text: 'second test todo'
}];


beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());;
})

describe('POST /todo', () => {

  it('should create a new todo', (done) => {

    var text = 'test todo text';
    request(app)
    .post('/todos')
    .send({text: text})
    .expect(200)
    .expect((res) => {
      expect(res.body.text).toBe(text);
    })
    .end((err, res) => {
      if(err){
        return done(err);
      }
      Todo.find({text: text}).then((todos) => {
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((e) => done(e));
    })
  });

  it('should not create todo', (done) => {

    request(app)
    .post('/todos')
    .send({})
    .expect(400)
    .end((err, res) => {
      if(err){
        return done(err);
      }
      Todo.find().then((todos) => {
        expect(todos.length).toBe(2);
        done();
      }).catch((e) => done(e));
    })
  });
});

describe('GET /todo/:id', () => {

    it('should return todo doc', (done) => {
      request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) =>{
        expect(res.body.todo.text).toBe(todos[0].text);
      }).end(done);
    });

    it('should return a 400 if todo not found', (done) => {
      request(app)
      .get(`/todos/${new ObjectID().toHexString()}`)
      .expect(404)
      .end(done);
    });

    it('should return a 400 if invalid id', (done) => {
      request(app)
      .get(`/todos/12345dvdx`)
      .expect(404)
      .end(done);
    });
});

describe('DELETE /todo/:id', () => {

    it('should remove todo doc', (done) => {
      request(app)
      .delete(`/todos/${todos[1]._id.toHexString()}`)
      .expect(200)
      .expect((res) =>{
        expect(res.body.todo._id).toBe(todos[1]._id.toHexString());
      }).end((err, res) => {
        if(err){
          return done(err);
        }
        Todo.findById(todos[1]._id.toHexString()).then((todo) => {
          expect(todo).toNotExist();
          done();
        }).catch((e) => done(e));
      });
    });
    it('should return a 400 if todo not found', (done) => {
      request(app)
      .delete(`/todos/${new ObjectID().toHexString()}`)
      .expect(404)
      .end(done);
    });

    it('should return a 400 if invalid id', (done) => {
      request(app)
      .delete(`/todos/12345dvdx`)
      .expect(404)
      .end(done);
    });
  });
