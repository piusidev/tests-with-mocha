const Todos = require('./todos');

const todos = new Todos();

todos.add("limpar a casa");

console.log(todos.list());

todos.complete("limpar a casa");

console.log(todos.list());
