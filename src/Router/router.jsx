import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Support from "../Pages/Support/Support";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import Layout from "../MainLayout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    errorElement:<Error/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/support",
        element: <Support/>,
      },
    ]
  },
  {
    path:"/login",
    element: <LogIn/>
  },
  {
    path:"/register",
    element: <Register/>
  }

]);

export default router