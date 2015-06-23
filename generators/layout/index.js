'use strict';
var yeoman = require('yeoman-generator');
var path = require('path');

module.exports = yeoman.generators.NamedBase.extend({
  initializing: function () {
    this.sourceRoot(path.join(__dirname, '../templates'));
    this.log('generate ' + this.name + ' layout file.');
    this.log('@import "' + path.join(this.config.get('path'), '/layout/' + this.name) + '";');
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('templates.scss'),
      this.destinationPath(path.join(this.config.get('path'), '/layout/_' + this.name + '.scss')),
      this
    );
  }
});