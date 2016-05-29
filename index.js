'use strict';

var config = require('./config.js');

var sortByVal = function (obj) {
  return function (a, b) { 
    return obj[a] > obj[b] ? -1 : 1;
  };
};

exports.convert = function (n, mappings) {
  var res = [],
      mappings = mappings || config.mappings,
      keys = Object.keys(mappings),
      sorted = keys.sort(sortByVal(mappings));

  sorted.forEach(function (key) {
    var val = mappings[key],
        times = Math.floor(n/val);

    for (var i = 0; i < times; i++) { 
      res.push(key); 
    };

    n = n % val;
  });

  return res.join('');
};

