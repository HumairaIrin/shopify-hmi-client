import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import Main from "../../layouts/Main";
import AllBuyers from "../AdminDashboard/AllBuyers/AllBuyers";
import AllSellers from "../AdminDashboard/AllSellers/AllSellers";
import CategoryItems from "../Home/Categories/CategoryItems";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import AddProduct from "../SellerDashboard/AddProduct/AddProduct";
import MyProducts from "../SellerDashboard/MyProducts/MyProducts";
import Blogs from "../Shared/Blogs/Blogs";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import SignUp from "../SignUp/SignUp";
import SellerRoute from "./SellerRoute";
import PrivateRoute from "./PrivateRoute";

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
                path: '/categoryItems/:categoryName',
                element: <PrivateRoute><CategoryItems></CategoryItems></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`https://resale-market-server-psi.vercel.app/products/${params.categoryName}`)
                }
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/allSellers',
                element: <AllSellers></AllSellers>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;