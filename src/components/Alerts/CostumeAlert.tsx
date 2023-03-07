import {  Toast, ToastContainer } from 'react-bootstrap'

interface Props {
  state: boolean
  title: string
  content: string
  type: string
  closeAlert: () => void
}
const CostumeAlert: React.FC<Props>  = ({state, title, content, type, closeAlert}) =>  {
 
    return  state ? (
      <ToastContainer className="p-3" position='bottom-end'>
      <Toast onClose={closeAlert} show={state} delay={4000} 
      autohide
      className="d-inline-block m-1"
      bg={type}
      key={type}

    >
      <Toast.Header>
       
        <strong className="me-auto">{title}</strong>
      
      </Toast.Header>
      <Toast.Body className='text-white'>
      {content}
      </Toast.Body>
    </Toast>
    </ToastContainer>
    ): null
  
}

export default CostumeAlert
