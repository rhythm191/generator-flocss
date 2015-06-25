'use strict';
var ScriptBase = require('../script-base.js');

var Generator = module.exports = ScriptBase;

Generator.prototype.typename = function() {
  return 'utility';
};

Generator.prototype.typepath = function() {
  return 'object/utility';
};
