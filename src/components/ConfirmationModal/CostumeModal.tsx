import React from 'react';
import Modal from 'react-bootstrap/Modal';
interface Props {
  show: boolean
  title: string
  body: string
  footer: React.ReactElement
  closeModal: () => void
}

const CostumeModal: React.FC<Props> = ({ show, title, body, footer, closeModal }) => {


  return show ? (
    <Modal show={show} 
      onHide={closeModal}
    >
      <Modal.Header  closeButton   >
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        {footer}
      </Modal.Footer>

    </Modal>
  ) : null
}

export default CostumeModal