import About from "../pages/About";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register";
import Dashboard from "../pages/Dashboard";
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
export const PrivateRouts = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        page: <Dashboard/> 
    },
    {
        path: '/profile',
        name: 'Profile',
        page: <Profile/>
    }
]
export const DefaultRouts = [
    {
        path: '/home',
        name: "Home",
        page: <Home />
    }, 
    {
        path: '/about',
        name: "About",
        page: <About />
    }
]

