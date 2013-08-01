document.write('<div id="ember-container"><div id="ember-test"></div></div>');

App.rootElement = '#ember-test';
App.setupForTesting();
App.injectTestHelpers();
