import Gallery from "../pages/gallery";
import Home from "../pages/home";
import Chat from "../pages/chat";
import Login from "../pages/login";
import Register from "../pages/register";
import ItemPage from "../pages/item";
import Admin from "../pages/admin";
import {HOME_ROUTE, GALLERY_ROUTE, CHAT_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, ITEM_ROUTE, ADMIN_ROUTE} from '../../assets/utils/consts'


export const privateRoutes = [
    {path:CHAT_ROUTE, element: <Chat />, exact: true},
    {path:ADMIN_ROUTE, element: <Admin />, exact: true}
    // {path:'/about', element: <About />, exact: true},
    // {path:'/movie/:id', element: <MovieIdPage />, exact: true},
]

export const publicRoutes = [
    {path:HOME_ROUTE, element: <Home />, exact: true},
    {path:GALLERY_ROUTE, element: <Gallery />, exact: true},
    {path:LOGIN_ROUTE, element: <Login />, exact: true},
    {path:REGISTER_ROUTE, element: <Register />, exact: true},
    {path:`${ITEM_ROUTE}/:id`, element: <ItemPage />, exact: true},
    
]



