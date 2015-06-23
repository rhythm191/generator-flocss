'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

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
  }
});
