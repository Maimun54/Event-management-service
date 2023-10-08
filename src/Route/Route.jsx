import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Componets/ServiceDetails";
import Errorpage from "../ErrorPage/Errorpage";
import PrivateProvider from "../Provider/PrivateProvider";
import Gallery from "../Pages/Register/Gallery/Gallery";


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
            element:<PrivateProvider><ServiceDetails></ServiceDetails></PrivateProvider>,
            loader:()=>fetch('/services.json')
        },
        {
          path:"/gallery",
          element:<PrivateProvider><Gallery></Gallery></PrivateProvider>
      }
      ]
    },
  ]);

  export default router