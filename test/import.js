'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var mkdirp = require('mkdirp')

describe('Flocss:generators/import', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/import'))
      .withArguments('name')
      .on('ready', function (generator) {
        generator.config.set('path', 'assets/styles');
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'assets/styles/_import.scss'
    ]);
  });
});
