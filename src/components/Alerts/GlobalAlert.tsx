
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../lib/store/store';
import CostumeAlert from './CostumeAlert'

const GlobalAlert = () => {
    const { state, title, content, type } = useSelector((state: RootState) => state.alert.value);
  const dispatch = useDispatch()

    return (
     <CostumeAlert state={state} title={title} content={content} type={type} />
    )
  
}
export default GlobalAlert
