import { Navigate } from "react-router-dom"
import { store } from "../lib/store/store";


interface Props {
    children: React.ReactElement
}

const PublicRoute: React.FC<Props> = ({ children }) => {
    const currentUser = store.getState().auth.value
  
    if (!currentUser.isLoggedIn) {
        return children 
    }
    return <Navigate to='/'  />

}

export default PublicRoute
