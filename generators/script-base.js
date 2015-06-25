'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.NamedBase.extend({
  initializing: function () {

    // --delete が指定されたら削除モードにする
    this.option('delete');

    if (!!this.options.delete) {
      this.log('delete _' + this.name + '.scss ' + this.typename() + ' file.');
    } else {
      this.sourceRoot(path.join(__dirname, './templates'));
      this.log('generate ' + this.name + ' ' + this.typename() + ' file.');
      this.log('@import "' + path.join(this.config.get('path'), this.typepath(), this.name) + '";');
    }
  },

  writing: function () {
    if (!!this.options.delete) {
      this.fs.delete(path.join(this.config.get('path'), this.typepath(), '_' + this.name + '.scss'));
    } else {
      this.fs.copyTpl(
        this.templatePath('templates.scss'),
        this.destinationPath(path.join(this.config.get('path'), this.typepath(), '_' + this.name + '.scss')),
        this
      );
    }
  }
});
