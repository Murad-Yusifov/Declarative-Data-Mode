import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Layout from "../companents/Layout";
import Basket from "../pages/Basket";
import NotFound from "../companents/NotFound";
import Wish from "../pages/Wish";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: '/',
                Component: Home,
            },{
                path:'/basket',
                Component: Basket
            },{
                path: '/wish',
                Component: Wish
            }
        ]},
        {
            path:'*',
            Component: NotFound
        }
    
    
])