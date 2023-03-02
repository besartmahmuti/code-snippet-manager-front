import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../lib/store/slices/modal";
import { RootState } from "../../lib/store/store";
import CostumeModal from "./CostumeModal"

const GlobalModal = () =>{
  const { state, title, body, footer } = useSelector((state: RootState) => state.modal.value);
  const dispatch = useDispatch()

  const closeModal = () =>{
    dispatch(hideModal)
  }
  return(
    <CostumeModal state={state} title={title} body={body} footer={footer} onDismiss={closeModal} />
  )   
}
export default GlobalModal