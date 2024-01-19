import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <StartPage />,      
            }
            

        ]
    }
]);
export default router;