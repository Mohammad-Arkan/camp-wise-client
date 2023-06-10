import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Errorpage from "../Pages/ErrorPage/Errorpage";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import SelectedClasses from "../Pages/Dashboard/SelectedClasses/SelectedClasses";
import PrivateRoutes from "./PrivateRoutes";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import Payment from "../Pages/Dashboard/PaymentPage/Payment";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <Errorpage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'instructors',
                element: <Instructors/>
            },
            {
                path: 'classes',
                element: <Classes/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'signup',
                element: <SignUp/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard/></PrivateRoutes>,
        children: [
            {
                path: 'selected-classes',
                element:<SelectedClasses/>
            },
            {
                path: 'my-classes',
                element: <MyClasses/>
            },
            {
                path: 'payment/:id',
                element: <Payment/>
            }
        ]
    }
])