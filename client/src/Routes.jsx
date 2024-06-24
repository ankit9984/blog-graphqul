import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import CreateQuotes from './components/CreateQuotes'
import Home from './components/Home'

export const routes = [
    {path:'/', element:<Home/>},
    {path:'/create', element:<CreateQuotes/>},
    {path:'/login', element:<Login/>},
    {path:'/signup', element:<Signup/>},
    {path:'/profile', element:<Profile/>},
]