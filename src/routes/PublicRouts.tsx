import { Navigate } from "react-router-dom"
import { RootState } from "../lib/store/store";
import { useSelector } from "react-redux";


interface Props {
    children: React.ReactElement
}

const PublicRoute: React.FC<Props> = ({ children }) => {
    const currentUser = useSelector((state: RootState) => state.auth.value)
  
    if (!currentUser.isLoggedIn) {
        return children 
    }
    return <Navigate to='/'  />

}

export default PublicRoute
