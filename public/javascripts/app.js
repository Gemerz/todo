var React = require('react');
global.React = React;

var TodoApp = require('./components/todo_app');
var LoginAPP = require('./components/login');
React.render( React.createElement(TodoApp), document.getElementById('todoapp'));
React.render( React.createElement(LoginAPP), document.getElementById('login'));
//React.renderComponent(LoginAPP(), document.getElementById('login'));
