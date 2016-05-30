
# <a href='https://www.npmjs.com/package/roman-numeral'>Roman Numeral</a>

Simple and straightforward number to roman numeral converter.

### Installation

To install:

```
npm install --save roman-numeral
```

### Getting Started

To use:

```javascript
require('roman-numeral').convert(2016); // >> "MMXVI"
```

Default Conversion Mapping:

```json
{
  "M": 1000 ,
  "CM": 900,
  "D": 500,
  "C": 100,
  "LX": 60,
  "L": 50,
  "XL": 40,
  "X": 10,
  "IX": 9,
  "V": 5,
  "IV": 4,
  "I": 1 
}
```

Override default by calling `romanNumeral.convert` with optional mapping argument:

```javascript
var custom = {
  "Y": 2015,
  "O": 1
};

require("roman-numeral").convert(2016, custom); // >> "YO"
```
### License

MIT

