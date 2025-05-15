import {
  createBrowserRouter,
  
} from "react-router";
import HomePage from "../Components/HomePage/HomePage";

import ErrorPage from "../Pages/Error Page/ErrorPage";
import Home from "../Pages/Home/Home";
import CompanyDertails from "../Pages/CompanyDetails/CompanyDertails";
import LogIn from "../Pages/LogIN/LogIn";
import SignUp from "../Pages/Sign Up/SignUp";
import MyProfile from "../Pages/My Profile/MyProfile";
import UpdateProfile from "../Pages/Update Profile/UpdateProfile";
import PrivateRoute from "../Pages/../Auhentication/PrivateRoute";

import Faqs from "../Pages/Faqs/Faqs";
import ForgottenPass from "../Pages/Forgottenpass/ForgottenPass";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children: [
      {
        path: "/",
        loader: () => fetch("/companies_with_jobs.json"),
        element: <Home></Home>,
      },
      {
        path: "/company/:id",
        loader: () => fetch("/companies_with_jobs.json"),
        element: <PrivateRoute><CompanyDertails></CompanyDertails></PrivateRoute>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>
      },
      {
        path:'/profile',
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
        path: "/update-profile",
        element:<UpdateProfile></UpdateProfile>
      },
      {
        path: "/FaQs",
        element: <Faqs></Faqs>
      },
      {
        path: "/forgotten-password",
        element: <ForgottenPass></ForgottenPass>
      }
    ],
    
  },
  {
    path: "*",
    Component: ErrorPage
  }
  
]);

export default router;