import React from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
interface Props {
  state: boolean
  title: string
  body: React.ReactElement
}

const ConfirmationModal: React.FC<Props> = ({state, title, body}) => {


  return (
      <Modal show={state}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
  );
}

export default ConfirmationModal