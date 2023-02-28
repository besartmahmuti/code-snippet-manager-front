import SyntaxHighlighter from 'react-syntax-highlighter';
import withHeaderAndFooter from '../../../hoc/withHeaderAndFooter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { useState } from 'react';
const AddSnippet = () =>{

    console.log(SyntaxHighlighter.supportedLanguages)
    const [codeString, setCodeString] = useState('')
    const handleCodeChange = (event: any) => {
      setCodeString('')
      setCodeString(event.target.innerText);
    };
    return(
      
        <div
        className='container'
        contentEditable={true}
        onInput={handleCodeChange}
        style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap',  minHeight: '100px' }}
      >
        
        <SyntaxHighlighter language="javascript" style={github}>
        {`function greet(name) {
    console.log(\`Hello, \${name}!\`);
  }`}
        </SyntaxHighlighter>
      </div>
    )
}
export default withHeaderAndFooter(AddSnippet)