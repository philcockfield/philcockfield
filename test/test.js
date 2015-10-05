let helpers = require("../helpers");
let modules = [
  "api-docs",
  "file-system-cache",
  "file-system-css",
  "js-bdd",
  "js-util",
  "react-atoms",
  "react-middleware",
  "rest-middleware",
  "ui-harness",
  "http-promises"
];


describe("Modules:", function() {
  this.timeout(20000);
  modules.forEach((name) => {
    it(name, (done) => { helpers.runTests(name, done) });
  });
});
