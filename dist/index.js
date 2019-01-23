"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Parses an NSIS Modern UI language header string
 * @param input - MUI string
 * @returns - MUI object
 */
var parse = function (input, options) {
    if (options === void 0) { options = {}; }
    var output = {};
    try {
        var lines = input.split('\n');
        lines.forEach(function (line, index) {
            line = line.replace(/(#.*)$/mg, '');
            line = line.trim();
            if (line.startsWith('${LangFileString}')) {
                var re = /^\${LangFileString}\s*(?<key>\w+)\s*\"(?<value>.*)\"$/;
                // @ts-ignore
                var groups = re.exec(line).groups;
                output[groups.key] = groups.value;
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
