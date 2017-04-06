var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Todo = require('./models/todo');

var app = express();

mongoose.connect('mongodb://test:password@ds151820.mlab.com:51820/fullstack-todo');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static('./public'));

//ROUTES
app.get('/todo', (req,res) => {
  Todo.find( {}, (err, data) => {
    if (err) throw err;
    res.render('index', {todos: data});
  });
});

app.post('/todo', (req,res) => {
  var newTodo = Todo(req.body).save((err,data) => {
    if (err) {console.log(err)};
    res.json(data);
  });
});

app.delete('/todo/:item', (req,res) => {
  var todoId = req.params.item;
  Todo.findOneAndRemove({ item: todoId }, (err, data) => {
    if (err) {console.log(err)};
    res.json(data);
  });
});




app.listen(process.env.PORT || 3000);
console.log('Listening to port 3000');
