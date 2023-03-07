import SyntaxHighlighter from 'react-syntax-highlighter';
import withHeaderAndFooter from '../../../hoc/withHeaderAndFooter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Button, Card, Container, Form } from 'react-bootstrap';
import SearchDropdownButton from '../../../components/SearchDropdownButton';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAlertContent } from '../../../lib/store/slices/alert';

;
interface SnippetFormData {
  title: string;
  language: string;
  code: string;
}
const AddSnippet = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState<SnippetFormData>({
    title: '',
    language: '',
    code: ''
  });

  const [saving, setSaving] = useState(true)
  const languages = ['plaintext', 'javascript', 'java', 'node-repl', 'c', 'php', 'python']
  const [language, setLanguage] = useState('')
  const [code, setCode] = useState(``)
  const [title, setTitle] = useState('')


  const handleSelect = (option: string) => {
    setLanguage(option)
  };




  const handleSaving = () => {
    // try {

    if (title.trim() === '' || language.trim() === '' || code.trim() === '') {
      dispatch(updateAlertContent({
        state: true,
        title: 'Error',
        content: 'Please fill all the inputs',
        type: 'danger'
      }))
    } else {
      const data: SnippetFormData = { title, language, code }
      setFormData(data)
      console.log(formData)
      setSaving(!saving)
    }



    // } catch (error) {
    //   console.log("your javascrip Code format is incorrect")
    // }

    // const data: SnippetFormData = { title, language, formattedCode }
    // setFormData(data)
    // console.log(formData)
    // setSaving(!saving)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        dispatch(updateAlertContent({
          state: true,
          title: 'Success',
          content: 'Snippet saved to clipboard',
          type: 'success'
        }))
      })
      .catch((error) => {
        console.error('Error copying text: ', error);
      });
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

                <SearchDropdownButton selected={language} options={languages} onSelect={handleSelect} />
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
          <div className="d-flex justify-content-between align-items-center">
            <h3>{title} <h6>({language})</h6> </h3>

            <Button variant="primary" onClick={() => {
              copyToClipboard();
            }}>Copy</Button>
          </div>
          <SyntaxHighlighter showLineNumbers={true} language={language} style={darcula} >
            {code}
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