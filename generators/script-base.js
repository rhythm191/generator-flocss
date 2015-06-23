'use strict';
var yeoman = require('yeoman-generator');
var path = require('path');

var Generator = module.exports = function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.sourceRoot(path.join(__dirname, './templates'));

  this.writing:
  initializing: function () {
    this.sourceRoot(path.join(__dirname, '../templates'));
    this.log('generate ' + this.name + ' component file.');
    this.log('@import "' + path.join(this.config.get('path'), '/object/component/' + this.name) + '";');
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('templates.scss')
      this.destinationPath(path.join(this.config.get('path'), '/object/component/_' + this.name + '.scss')),
      this
    );
  }
};
