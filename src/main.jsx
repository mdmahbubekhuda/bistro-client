import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import AuthProvider from "./context/AuthProvider";
import PageTitleProvider from "./context/PageTitleProvider";
import TanStackProvider from "./context/TanStackProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <TanStackProvider>
        <PageTitleProvider>
          <div className="max-w-screen-xl mx-auto">
            <RouterProvider router={router} />
          </div>
        </PageTitleProvider>
      </TanStackProvider>
    </AuthProvider>
  </React.StrictMode>
);
