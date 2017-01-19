'use strict';

var yeoman = require('yeoman-environment');
var adapter = require('yeoman-test/lib/adapter');
var Promise = require('pinkie-promise');

function ezyo(name, generator, answers, opts) {
  return new Promise(function( resolve, reject) {
    var env = yeoman.createEnv(name, opts, new adapter.TestAdapter(answers));
    env.register(generator, name);
    env.run(name, function (err) {
      if(err){
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
module.exports = ezyo;
