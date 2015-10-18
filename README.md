# lol-cac-parser
A parser for .cac files from League of Legends.

## Download
lol-cac-parser is installable via:

- [GitHub](https://github.com/Pupix/lol-cac-parser) `git clone https://github.com/Pupix/lol-cac-parser.git`
- [npm](https://www.npmjs.com/): `npm install lol-cac-parser`

## Usage example

```js
var CacParser = require('lol-cac-parser'),
    cac = new CacParser();
    
    cac.read('Kindred_Base.cac', function (err, data) {
        console.log(data);
        //  {
        //      CACCooldown: 5
        //      situations: [
        //          {
        //              chooseRandomValidRule: "false"
        //              cooldown: 15
        //              situationName: "AttackMinion2D"
        //              rules: [...]
        //          }
        //      ]
        //  }
    });

```

## Available methods

**N.B:** All methods act as promises if no callback is passed.

### parse(path, cb)

It will roughly parse a .cac file from the given path.

**Parameters**

1. **path {string}** A path to where the file to parse resides.
2. **[cb] {Function}** A callback called with `(error, parsedData)` as arguments.

### read(path, cb)

It will read a .cac file from the given path, creating a data object.

**Parameters**

1. **path {string}** A path to where the file to read resides.
2. **[cb] {Function}** A callback called with `(error, readData)` as arguments.

