'use strict';
var yeoman = require('yeoman-generator');
var fs = require('fs');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {

    var base_path = this.config.get('path');

    var fileList = {
      foundation: getScssFileList(path.join(base_path, 'foundation')),
      layout: getScssFileList(path.join(base_path, 'layout')),
      component: getScssFileList(path.join(base_path, 'object/component')),
      project: getScssFileList(path.join(base_path, 'object/project')),
      utility: getScssFileList(path.join(base_path, 'object/utility'))
    }
    this.fileList = fileList;

    this.log('flocss import file generate.');
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('import.scss'),
      this.destinationPath(path.join(this.config.get('path'), '_import.scss')),
      { base_path: this.config.get('path'), fileList: this.fileList }
    );
  }
});


function getScssFileList(dir_path) {
  var results = [];

  if(!fs.existsSync(dir_path)) {
    return results;
  }

  var files = fs.readdirSync(dir_path);
  files.filter(function(file) {
    return fs.statSync(path.join(dir_path, file)).isFile() && /.*\.scss$/.test(file); //絞り込み
  }).forEach(function (file) {
    results.push(path.basename(file, '.scss'));
  });

  return results;
}
