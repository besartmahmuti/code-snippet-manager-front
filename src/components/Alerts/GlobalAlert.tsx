
import { useDispatch, useSelector } from 'react-redux';
import { updateAlertState } from '../../lib/store/slices/alert';
import { RootState } from '../../lib/store/store';
import CostumeAlert from './CostumeAlert'

const GlobalAlert = () => {
    const { state, title, content, type } = useSelector((state: RootState) => state.alert.value);
  const dispatch = useDispatch()
  const closeAlert = () =>{
    dispatch(updateAlertState(false))
  }

    return (
     <CostumeAlert state={state} title={title} content={content} type={type} closeAlert={closeAlert} />
    )
  
}
export default GlobalAlert
