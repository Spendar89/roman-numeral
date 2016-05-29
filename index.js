'use strict';

var config = require('./config.js');

exports.convert = function (n, mappings) {
  var res = [],
    mappings = mappings || config.mappings,
    keys = Object.keys(mappings);

  keys.forEach(function (key) {
    var val = mappings[key],
      times = Math.floor(n/val);

    for (var i = 0; i < times; i++) { 
      res.push(key); 
    };

    n = n % val;
  });

  return res.join('');
};

