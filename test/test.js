'use strict'
import _ from 'lodash';
import { expect } from 'chai';
import fs from 'fs';
import fsPath from 'path';
import util from 'util';
import { spawn } from 'child_process';
import chalk from 'chalk';

const SILENT = true;


describe('Modules:', function() {
  this.timeout(10000);
  it('js-util', (done) => { runTests('js-util', done) });
  it('js-bdd', (done) => { runTests('js-bdd', done) });
  it('ui-harness', (done) => { runTests('ui-harness', done) });
});


// ----------------------------------------------------------------------------

var log = (...messages) => {
  if (SILENT) { return; }
  console.log.apply(this, messages);
};


var runCommand = (path, command, args, callback) => {
  log(chalk.cyan(`Executing '${ command } ${ args }' in`), path);
  let childProcess = spawn(command, args, { cwd:path });
  let errors = [];

  childProcess.stdout.on('data', (data) => { log(chalk.green(data.toString())) });
  childProcess.stderr.on('data', (data) => {
      let err = data.toString();
      log(chalk.red(err));
      errors.push(err);
  });
  childProcess.on('close', (code) => {
      callback({ errors:errors, code:code });
  });
};


var runTests = (module, done) => {
  let path = fsPath.resolve(`${ __dirname }/../../${ module }`);
  runCommand(path, 'npm', ['test'], (err) => {
      if (err.errors.length > 0) {
        throw new Error(`The module [${ module }] has failing tests.`);
      }
      done();
  });
};
