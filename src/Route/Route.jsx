import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Componets/ServiceDetails";
import Errorpage from "../ErrorPage/Errorpage";


const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout> ,
      errorElement:<Errorpage></Errorpage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('/services.json')
            
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/details/:id",
            element:<ServiceDetails></ServiceDetails>,
            loader:()=>fetch('/services.json')
        }
      ]
    },
  ]);

  export default router