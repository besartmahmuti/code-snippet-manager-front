import SyntaxHighlighter from 'react-syntax-highlighter';
import withHeaderAndFooter from '../../../hoc/withHeaderAndFooter';
// import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';

// import { useEffect, useRef, useState } from 'react';
const AddSnippet = () =>{
  const codeString = `function greet(name) {
    console.log(\`Hello, \${name}!\`);
  }`;

  const formattedCode = prettier.format(codeString, {
    parser: 'babel',
    plugins: [parserBabel],
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: 'es5',
  });

  return (
    <SyntaxHighlighter language="javascript" style={darcula} contentEditable>
      {formattedCode}
    </SyntaxHighlighter>
  );
}
export default withHeaderAndFooter(AddSnippet)