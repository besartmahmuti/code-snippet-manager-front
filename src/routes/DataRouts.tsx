import About from "../pages/About";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register";
import Snippet from "../pages/Snippet";
import Home from "../pages/Home";
import Profile from "../pages/Profile";


export const publicRoutes = [
    {
        path: '/login',
        name: "Login",
        page: <Login />
    },
    {
        path: '/register',
        name: "Register",
        page: <Register />
    },


]
export const privateRouts = [
    {
        path: '/snippet',
        name: 'Snippet',
        page: <Snippet />
    },
    {
        path: '/profile',
        name: 'Profile',
        page: <Profile />
    }
]
export const defaultRouts = [
    {
        path: '/',
        name: "Home",
        page: <Home />
    },
    {
        path: '/about',
        name: "About",
        page: <About />
    }
]
const data = {
    privateRouts,
    publicRoutes,
    defaultRouts
}
export default data;
