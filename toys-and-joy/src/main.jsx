import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/ConfigRoutes.jsx";
import "./index.css";
import ContextRoot from "./routes/ContextRoot.jsx";
// sen ska lägga till Routerprovider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextRoot>
      <RouterProvider router={router} />
    </ContextRoot>
  </React.StrictMode>
);
