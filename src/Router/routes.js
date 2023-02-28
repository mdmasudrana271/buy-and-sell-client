import AddProduct from "../components/AddProduct/AddProduct";
import Details from "../components/Home/Details";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MyOrders from "../components/MyOrders/MyOrders";
import Signup from "../components/Signup/Signup";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/add-product",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: "/my-orders",
        element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({params})=>fetch(`https://buy-sell-server-roan.vercel.app/details/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

export default router;
