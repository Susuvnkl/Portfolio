import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import router from "./Router.tsx";
import BackgroundLayout from "./components/BackgroundLayout/BackgroundLayout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BackgroundLayout>
      <RouterProvider router={router} />
    </BackgroundLayout>
  </React.StrictMode>
);
