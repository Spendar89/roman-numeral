var config = require('./config.js');

function romanNumeral (num, mappings) {
  var romans = [];

  mappings = mappings || config.mappings;

  Array.reduce(mappings, function (n, r) {
    var key = Object.keys(r)[0];
    var val = Object.values(r)[0];

    for (var i = 0; i < Math.floor(n/val); i++) { 
      romans.push(key); 
    };

    return n % val;
  }, num);

  return romans.join('');
};

module.exports = romanNumeral;
