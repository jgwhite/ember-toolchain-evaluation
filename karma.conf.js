module.exports = function(config) {
  config.set({

    frameworks: [
      'qunit'
    ],

    files: [
      'js/application.js',
      'test/test_helper.js',
      'test/**/*_test.js'
    ],

    browsers: [
      'PhantomJS'
    ]

  });
};
