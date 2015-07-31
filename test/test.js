let helpers = require('../helpers');
let modules = [
  'js-util',
  'js-bdd',
  'ui-core',
  'ui-harness',
  'rest-methods',
  'http-promises'
];


describe('Modules:', function() {
  this.timeout(10000);
  modules.forEach((name) => {
    it(name, (done) => { helpers.runTests(name, done) });
  });
});
