var React = require('react');
global.React = React;

var TodoApp = require('./components/todo_app');
//var LoginAPP = require('./components/login');
React.renderComponent(TodoApp(), document.getElementById('todoapp'));
//React.renderComponent(LoginAPP(), document.getElementById('login'));
