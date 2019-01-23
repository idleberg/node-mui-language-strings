# mui-language-strings

[![npm](https://flat.badgen.net/npm/license/@nsis/mui-language-strings)](https://www.npmjs.org/package/@nsis/mui-language-strings)
[![npm](https://flat.badgen.net/npm/v/@nsis/mui-language-strings)](https://www.npmjs.org/package/@nsis/mui-language-strings)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/node-mui-language-strings)](https://circleci.com/gh/idleberg/node-mui-language-strings)
[![David](https://flat.badgen.net/david/dev/idleberg/node-mui-language-strings)](https://david-dm.org/idleberg/node-mui-language-strings?type=dev)

Parser for NSIS Modern UI language headers

## Installation

`yarn add @nsis/mui-language-strings || npm install @nsis/mui-language-strings`

## Usage

Use ES6 imports or `require()` to include the module:

```js
// ECMAScript Import
import { parse } from '@nsis/mui-language-strings';

// CommonJS Require
const { parse } = require('@nsis/mui-language-strings');
```

Example usage in script:

```js
// Read an NSIS Language File
const languageFile = fs.readFileSync('Contrib/Languages/English.nsh', 'utf8');

const languageObj = parse(languageFile);
```

### Methods

#### parse

Usage: `parse(string, options)`

Parses an NSIS Modern UI language header, constructing an object or JSON string that's easy to query

##### options.stringify

Type: `boolean`

Return a stringified object

##### options.minify

Type: `boolean`

Minifies a stringified object, requires `options.stringify` to be `true`

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)

## Donate

You are welcome to support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/node-mui-language-strings) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
