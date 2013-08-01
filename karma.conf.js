module.exports = function(config) {
  config.set({

    frameworks: [
      'qunit'
    ],

    files: [
      'test/test_helper.js',
      'test/**/*_test.js'
    ],

    browsers: [
      'PhantomJS'
    ]

  });
};
