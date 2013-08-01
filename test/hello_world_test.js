module('Hello World', {
  setup: function() {
    App.reset();
  }
});

test('the hello world route says hello, world', function() {
  visit('/hello-world').then(function() {
    ok(find('h1:contains("Hello, World!")'),
      'An h1 containing "Hello, World!" should display');
  });
});
