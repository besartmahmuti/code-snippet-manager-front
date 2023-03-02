import React from 'react';
import Modal from 'react-bootstrap/Modal';
interface Props {
  state: boolean
  title: string
  body: string
  footer: React.ReactElement
  onDismiss: () => void
}

const CostumeModal: React.FC<Props> = ({ state, title, body, footer, onDismiss }) => {


  return state ? (
    <Modal show={state}  >
      <Modal.Header  >
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