import About from "../pages/About";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register";
import Snippet from "../pages/Snippet/SnippetList";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SnippetDetails from "../pages/Snippet/SnippetDetails";
import NotFound from "../pages/NotFound";


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
        path: '/addSnippet',
        name: 'Add Snippet',
        page: <SnippetDetails />
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
    },
    {
        path: '*',
        name:"Not Found",
        page: <NotFound />
    }
]
const data = {
    privateRouts,
    publicRoutes,
    defaultRouts
}
export default data;
