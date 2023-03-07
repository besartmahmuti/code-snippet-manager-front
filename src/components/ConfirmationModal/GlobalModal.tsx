import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../lib/store/slices/modal";
import { RootState } from "../../lib/store/store";
import CostumeModal from "./CostumeModal"

const GlobalModal = () =>{
  const { show, title, body, footer } = useSelector((state: RootState) => state.modal.value);
  const dispatch = useDispatch()

  const closeModal = () =>{
    dispatch(hideModal(false))
  }
  return(
    <CostumeModal show={show} title={title} body={body} footer={footer} closeModal={closeModal} />
  )   
}
export default GlobalModal