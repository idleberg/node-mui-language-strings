/**
 * Parses an NSIS Modern UI language header string
 * @param input - MUI string
 * @returns - MUI object
 */
const parse = (input: string, options: ParserOptions = {}): Object|string => {
  let output: any = {
    file: null,
    english: null,
    native: null,
    nativeASCII: null,
    strings: {}
  };

  try {
    const lines = input.split('\n');

    lines.forEach( (line, index) => {
        line = line.replace(/(#.*)$/mg, '');
        line = line.trim();

        if (line.startsWith('!insertmacro LANGFILE')) {
          let matches = line.match(/"[^"]*"|=/g);

          matches.forEach( (match, index) => {
            // Strip quotes
            matches[index] = match.replace(/^"/, '').replace(/"$/, '');

            if (match === '=') {
              matches[index] = matches[index - 1];
            }
          });

          output['file'] = matches[0];
          output['english'] = matches[1];
          output['native'] = matches[2];
          output['nativeASCII'] = matches[3];
        }

        if (line.startsWith('${LangFileString}')) {
            const re = /^\${LangFileString}\s*(?<key>\w+)\s*\"(?<value>.*)\"$/;
            // @ts-ignore
            const { groups } = re.exec(line);

            output.strings[groups.key] = groups.value;
        }
    });
  } catch (e) {
    throw e;
  }

  if (options.stringify === true) {
    const indentation: number = (options.minify === true) ? 0 : 2;
    return JSON.stringify(output, null, indentation);
  }

  return output;
};

export { parse };
