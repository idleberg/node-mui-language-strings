"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Parses an NSIS Modern UI language header string
 * @param input - MUI string
 * @returns - MUI object
 */
var parse = function (input, options) {
    if (options === void 0) { options = {}; }
    var output = {
        file: null,
        english: null,
        native: null,
        nativeASCII: null,
        strings: {}
    };
    try {
        var lines = input.split('\n');
        lines.forEach(function (line, index) {
            line = line.replace(/(#.*)$/mg, '');
            line = line.trim();
            if (line.startsWith('!insertmacro LANGFILE')) {
                var matches_1 = line.match(/"[^"]*"|=/g);
                matches_1.forEach(function (match, index) {
                    // Strip quotes
                    matches_1[index] = match.replace(/^"/, '').replace(/"$/, '');
                    if (match === '=') {
                        matches_1[index] = matches_1[index - 1];
                    }
                });
                output['file'] = matches_1[0];
                output['english'] = matches_1[1];
                output['native'] = matches_1[2];
                output['nativeASCII'] = matches_1[3];
            }
            if (line.startsWith('${LangFileString}')) {
                var re = /^\${LangFileString}\s*(?<key>\w+)\s*\"(?<value>.*)\"$/;
                // @ts-ignore
                var groups = re.exec(line).groups;
                output.strings[groups.key] = groups.value;
            }
        });
    }
    catch (e) {
        throw e;
    }
    if (options.stringify === true) {
        var indentation = (options.minify === true) ? 0 : 2;
        return JSON.stringify(output, null, indentation);
    }
    return output;
};
exports.parse = parse;
