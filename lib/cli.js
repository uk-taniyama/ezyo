#!/usr/bin/env node
'use strict';
var meow = require('meow');
var ezyo = require('./');

var cli = meow([
  'Usage',
  '  $ ezyo [input]',
  '',
  'Options',
  '  --foo  Lorem ipsum. [Default: false]',
  '',
  'Examples',
  '  $ ezyo',
  '  unicorns',
  '  $ ezyo rainbows',
  '  unicorns & rainbows'
]);
// console.log(cli);
console.log(process.cwd());
console.log(process.env);
ezyo();

