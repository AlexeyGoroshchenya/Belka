import Gallery from "../pages/gallery";
import Home from "../pages/home";
import Chat from "../pages/chat";
// import About from "../pages/About";
// import MovieIdPage from "../pages/MovieIdPage";

import {HOME_ROUTE, GALLERY_ROUTE, CHAT_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE} from '../../assets/utils/consts'
import Login from "../pages/login";
import Register from "../pages/register";


export const privateRoutes = [
    {path:CHAT_ROUTE, element: <Chat />, exact: true},
    
    // {path:'/about', element: <About />, exact: true},
    // {path:'/movie/:id', element: <MovieIdPage />, exact: true},
]

export const publicRoutes = [
    {path:HOME_ROUTE, element: <Home />, exact: true},
    {path:GALLERY_ROUTE, element: <Gallery />, exact: true},
    {path:LOGIN_ROUTE, element: <Login />, exact: true},
    {path:REGISTER_ROUTE, element: <Register />, exact: true},
    // {path:'/movie/:id', element: <MovieIdPage />, exact: true},
]



