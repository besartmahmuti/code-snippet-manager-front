import { useState } from 'react'
import {  Toast, ToastContainer } from 'react-bootstrap'

interface Props {
  state: boolean
  title: string
  content: string
  type: string
}
const CostumeAlert: React.FC<Props>  = ({state, title, content, type}) =>  {
   const [show, setShow] = useState(state)
    return (
      <ToastContainer className="p-3" position='bottom-end'>
      <Toast  onClose={() => setShow(false)} show={show} delay={4000} 
      autohide
      className="d-inline-block m-1"
      bg={type}
      key={type}

    >
      <Toast.Header>
        <img
          src="holder.js/20x20?text=%20"
          className="rounded me-2"
          alt=""
        />
        <strong className="me-auto">{title}</strong>
      
      </Toast.Header>
      <Toast.Body className='text-white'>
      {content}
      </Toast.Body>
    </Toast>
    </ToastContainer>
    )
  
}

export default CostumeAlert
