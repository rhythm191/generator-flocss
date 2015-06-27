'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('Flocss:generators/utility', function () {
  describe('create file', function() {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/utility'))
        .withArguments('text')
        .on('ready', function (generator) {
          generator.config.set('path', 'assets/styles');
        })
        .on('end', done);
    });

    it('creates files', function () {
      assert.file([
        'assets/styles/object/utility/_text.scss'
      ]);
    });
  });

  describe('delete file', function() {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/utility'))
        .withArguments('text')
        .withOptions({delete: 'delete'})
        .on('ready', function (generator) {
          generator.config.set('path', 'assets/styles');
        })
        .on('end', done);
    });

    it('delete files', function () {
      assert.noFile([
        'assets/styles/object/utility/_text.scss'
      ]);
    });
  });
});
