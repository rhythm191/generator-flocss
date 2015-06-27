'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the unreal ' + chalk.red('Flocss') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'path',
      message: 'Would you like to path to sass?',
      default: 'assets/styles'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;
      this.config.set('path', props.path);

      done();
    }.bind(this));
  },

  writing: function() {
    mkdirp(path.join(this.config.get('path'), 'foundation'));
    mkdirp(path.join(this.config.get('path'), 'foundation'));
    mkdirp(path.join(this.config.get('path'), 'layout'));
    mkdirp(path.join(this.config.get('path'), 'object/component'));
    mkdirp(path.join(this.config.get('path'), 'object/project'));
    mkdirp(path.join(this.config.get('path'), 'object/utility'));
  }
});
