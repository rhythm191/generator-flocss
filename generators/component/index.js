'use strict';
var ScriptBase = require('../script-base.js');

var Generator = module.exports = ScriptBase;

Generator.prototype.typename = function() {
  return 'component';
};

Generator.prototype.typepath = function() {
  return 'object/component';
};
