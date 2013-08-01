var App = require('./app');

App.Router.map(function() {
  this.resource('hello_world', { path: 'hello-world' });
});

