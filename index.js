var MAPPINGS = [
  { 'M': 1000 },
  { 'D': 500 },
  { 'C': 100 },
  { 'L': 50},
  { 'x': 10 },
  { 'ix': 9 },
  { 'v': 5 },
  { 'iv': 4 },
  { 'i': 1 }
];

function romanNumeral (num, mappings) {
  var romans = [];

  mappings = mappings || MAPPINGS;

  Array.reduce(mappings, function (n, r) {
    var key = Object.keys(r)[0];
    var val = Object.values(r)[0];

    for (let i = 0; i < Math.floor(n/val); i++) { 
      romans.push(key); 
    };

    return n % val;
  }, num);

  return romans.join('');
};

module.exports = romanNumeral;
