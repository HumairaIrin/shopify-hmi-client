import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import CategoryItems from "../Home/Categories/CategoryItems";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import Blogs from "../Shared/Blogs/Blogs";
import SignUp from "../SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/categoryItems/:id',
                element: <CategoryItems></CategoryItems>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/products/${params.id}`)
                }
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])

export default router;