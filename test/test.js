let helpers = require("../helpers");
let modules = [
  "api-docs",
  "fs-css",
  "js-bdd",
  "js-util",
  "react-server-pages",
  "rest-methods",
  "ui-core",
  "ui-harness",
  "http-promises"
];


describe("Modules:", function() {
  this.timeout(10000);
  modules.forEach((name) => {
    it(name, (done) => { helpers.runTests(name, done) });
  });
});
