import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

import BringData from "../components/getProduct/GetProduct";
import Login from "../components/log in/Login";
import StartPage from "../components/start-page/StartPage"
import RegisterUser from "../components/registerUser/RegisterUser";
import BringUser from "../components/user/GetUser";
import DetailsItem from "../components/detail-item/detailsItem";
import Cart from "../components/cart/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <StartPage/>,
      },
      {
        path: "/product",
        element: <BringData />,
      },
      {
        path: "/admin",
        element: <Login />,
      },
      {
         path: "/register",
       element: <RegisterUser />,
     },
       {
         path: "/admin/users" ,
       element: <BringUser />,
    },
    {
        path: "/product/:id",
        element: <DetailsItem/>,
    },
    {
      path: "/cart",
      element: <Cart/>
    }

    ],
  },
]);
export default router;
