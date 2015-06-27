'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('Flocss:generators/component', function () {
  describe('create file', function() {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/component'))
        .withArguments('button')
        .on('ready', function (generator) {
          generator.config.set('path', 'assets/styles');
        })
        .on('end', done);
    });

    it('creates files', function () {
      assert.file([
        'assets/styles/object/component/_button.scss'
      ]);
    });
  });

  describe('delete file', function() {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/component'))
        .withArguments('button')
        .withOptions({delete: 'delete'})
        .on('ready', function (generator) {
          generator.config.set('path', 'assets/styles');
        })
        .on('end', done);
    });

    it('delete files', function () {
      assert.noFile([
        'assets/styles/object/component/_button.scss'
      ]);
    });
  });
});
