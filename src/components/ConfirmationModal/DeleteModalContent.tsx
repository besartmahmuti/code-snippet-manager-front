import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { hideModal } from "../../lib/store/slices/modal";

const DeleteModalContent = () =>{
    const dispatch = useDispatch()

    const closeModal = () =>{
        dispatch(hideModal(false))
      }
    return(
        <>
        <Button variant="secondary" onClick={()=>{closeModal()}}>Close</Button>
          <Button variant="primary">Delete</Button>
          </>
    );
}
export default DeleteModalContent