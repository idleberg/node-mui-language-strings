/**
 * Parses an NSIS Modern UI language header string
 * @param input - MUI string
 * @returns - MUI object
 */
const parse = (input: string, options: ParserOptions = {}): Object|string => {
  let output: any = {};

  try {
    const lines = input.split('\n');

    lines.forEach( (line, index) => {
        line = line.replace(/(#.*)$/mg, '');
        line = line.trim();

        if (line.startsWith('${LangFileString}')) {
            const re = /^\${LangFileString}\s*(?<key>\w+)\s*\"(?<value>.*)\"$/;
            // @ts-ignore
            const { groups } = re.exec(line);

            output[groups.key] = groups.value;
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
