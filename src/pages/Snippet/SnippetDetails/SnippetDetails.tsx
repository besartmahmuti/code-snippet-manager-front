import SyntaxHighlighter from 'react-syntax-highlighter';
import withHeaderAndFooter from '../../../hoc/withHeaderAndFooter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Button, Card, Container, Form, Spinner } from 'react-bootstrap';
import SearchDropdownButton from '../../../components/SearchDropdownButton';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAlertContent } from '../../../lib/store/slices/alert';
import { SnippetFormData } from '../../../lib/types';
import { useNavigate, useParams } from 'react-router-dom';
import { DATA } from '../../../lib/constants';
import { copyToClipboard } from '../../../utils/copyToClipboard';

const SnippetDetails = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [saving, setSaving] = useState(true)
  const { id , isSaving } = useParams();
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<SnippetFormData>({
    title: '',
    language: '',
    code: ''
  }); 



  useEffect(() => {
    setLoading(true)
    if (id) {
      const item = DATA.find((data) => data.id === +id);
     item && setFormData({ ...formData, title: item.title, language : item.language, code: item.code})
     
     setSaving((isSaving === 'true' ? true : false))
   
    }
     setLoading(false)
    // eslint-disable-next-line
  }, [])
  
 

  const languages = ['plaintext', 'javascript', 'java', 'node-repl', 'c', 'php', 'python']



  const handleSelect = (option: string) => {
    setFormData({ ...formData, language: option })

  };




  const handleSaving = () => {
    setLoading(true)
    if (formData.title.trim() === '' || formData.language.trim() === '' || formData.code.trim() === '') {
      dispatch(updateAlertContent({
        state: true,
        title: 'Error',
        content: 'Please fill all the inputs',
        type: 'danger'
      }))
    } else {
      dispatch(updateAlertContent({
        state: true,
        title: 'Success',
        content: 'Snippet saved successfully ',
        type: 'success'
      }))
      console.log(formData)
      setSaving(!saving)
    }
    setLoading(false)
  }

  const copy = () => {
    copyToClipboard(formData.code).then((success) => {
      if (success) {
        dispatch(updateAlertContent({
          state: true,
          title: 'Success',
          content: 'Data copied to clipboard!',
          type: 'success'
        }))
      } else {
        dispatch(updateAlertContent({
          state: true,
          title: 'Failed',
          content: 'Failed to copy data to clipboard!',
          type: 'danger'
        }))
      }
    });
  }


  return (
    <> 
    {loading   ? <Container className="mt-3 mb-5 text-center">  <Spinner animation="grow" variant="dark" />  </Container> : 
   
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
                  value={formData.title}
                  placeholder={"Snippet title"}
                  onChange={(event) => setFormData({ ...formData, title: event.target.value })}
                />

                <SearchDropdownButton selected={formData.language} options={languages} onSelect={handleSelect} />
              </div>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Past a snippet of code</Form.Label>
                <Form.Control as="textarea" rows={13} value={formData.code} onChange={(event) => setFormData({ ...formData, code: event.target.value })} />
              </Form.Group>
              <Button variant="primary" onClick={() => {
                handleSaving();
              }}>Save</Button>
            </Card.Body>
          </Card> </> :
        <>
          <div className="d-flex justify-content-between align-items-center">
            <h3>{formData.title} <h6>({formData.language})</h6> </h3>

            <Button variant="primary" onClick={() => {
              copy();
            }}>Copy</Button>

          </div>
    
          <SyntaxHighlighter showLineNumbers={true} language={formData.language} style={darcula} >
            {formData.code}
          </SyntaxHighlighter>
          <Button variant="primary" onClick={() => {
           setSaving(true)
          }}>Keep editing</Button> {' '}
                  <Button variant="primary" onClick={() => {
          navigate({
            pathname: '/snippet'
          });
          }}>Done editing</Button>
         
        </>
      }


    </Container>

      }</>
  );
}
export default withHeaderAndFooter(SnippetDetails)