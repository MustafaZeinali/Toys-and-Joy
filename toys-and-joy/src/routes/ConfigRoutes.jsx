import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";


import BringData from "../components/getProduct/GetProduct";
import Login from "../components/log in/Login";
import LandingPage from "../components/landing page/LandingPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <LandingPage/>,      
            },
            {
                path: "/product",
                element: <BringData/>, 
            },
            {
                path: "/admin",
                element: <Login/>,
            }
            

        ]
    }
]);
export default router;