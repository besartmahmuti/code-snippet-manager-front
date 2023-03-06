import SyntaxHighlighter from 'react-syntax-highlighter';
import withHeaderAndFooter from '../../../hoc/withHeaderAndFooter';
// import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import SearchDropdownButton from '../../../components/SearchDropdownButton';
interface SnippetFormData {
  title: string;
  language: string;
  formattedCode: string;
}
const AddSnippet = () => {
  const [formData, setFormData] = useState<SnippetFormData>({
    title: '',
    language: '',
    formattedCode: ''
  });

  const [saving, setSaving] = useState(true)
  const languages = ['javascript', 'java', 'node-repl', 'c' , 'php','python']
  const [language, setLanguage] = useState('')
  const [code, setCode] = useState('')
  const [title, setTitle] = useState('')
  const [formattedCode, setFormattedCode] = useState('')

  const handleSelect = (option: string) => {
    setLanguage(option)
  };

 

  const handleSaving = () => {
    setFormattedCode(prettier.format(code, {
      parser: 'babel',
      plugins: [parserBabel],
      printWidth: 80,
      tabWidth: 2,
      useTabs: false,
      semi: true,
      singleQuote: true,
      trailingComma: 'es5',
    }))
    const data: SnippetFormData = { title, language, formattedCode }
    setFormData(data)
    setSaving(!saving)
  }




  return (
    <Container className="mt-3 mb-5">
    
      {saving ?
      <> 
         <h4>Add snippet</h4>
        <Card>
          <Card.Header>
            <div className="d-flex justify-content-between align-items-center">
              <Form.Control
                className='m-4'
                type="text"
                value={title}
                placeholder={"Snippet title"}
                onChange={(event) => setTitle(event.target.value)}
              />

              <SearchDropdownButton options={languages} onSelect={handleSelect} />
            </div>
          </Card.Header>
          <Card.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Past a snippet of code</Form.Label>
              <Form.Control as="textarea" rows={13} value={code} onChange={(event) => setCode(event.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={() => {
              handleSaving();
            }}>Save</Button>
          </Card.Body>
        </Card> </> :
        <>
           <h3>{title}</h3> <h6>({language})</h6>
        <SyntaxHighlighter language={language} style={darcula} >
          {formattedCode}
        </SyntaxHighlighter>
        <Button variant="primary" onClick={() => {
              handleSaving();
            }}>Keep editing</Button>
        </>
      }
    </Container>
  );
}
export default withHeaderAndFooter(AddSnippet)