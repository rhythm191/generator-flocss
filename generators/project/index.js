'use strict';
var ScriptBase = require('../script-base.js');

var Generator = module.exports = ScriptBase;

Generator.prototype.typename = function() {
  return 'project';
};

Generator.prototype.typepath = function() {
  return 'object/project';
};
