import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Cliente from "./components/Cliente";
import Articulo from "./components/Articulo";
import Orden from "./components/Orden";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Cliente/>
            },
            {
                path: '/clientes',
                element: <Cliente/>
            },
            {
                path:'/articulos',
                element:<Articulo/>
            },
            {
                path:'/ordenes',
                element:<Orden/>
            }
        ]    
    },


])

export default router;