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
const languageFile = fs.readFileSync('Contrib/Language files/English.nsh', 'utf8');

const languageObj = parse(languageFile);
```

### Methods

#### parse

Usage: `parse(string, options)`

Parses an NSIS Modern UI language header, constructing an object or JSON string that's easy to query

##### options.looseQuotes

Type: `boolean`

Ignores leading and trailing quotes of a language string. This option is useful to parse the Hindi language, which currently lacks one trailing quote.

##### options.minify

Type: `boolean`

Minifies a stringified object, requires `options.stringify` to be `true`

##### options.stringify

Type: `boolean`

Return a stringified object

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)
