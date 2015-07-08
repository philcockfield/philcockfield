var helpers = require('../helpers');


describe('Modules:', function() {
  this.timeout(10000);
  it('js-util', (done) => { helpers.runTests('js-util', done) });
  it('js-bdd', (done) => { helpers.runTests('js-bdd', done) });
  it('ui-components', (done) => { helpers.runTests('ui-components', done) });
  it('ui-harness', (done) => { helpers.runTests('ui-harness', done) });
  it('server-methods', (done) => { helpers.runTests('server-methods', done) });
});
