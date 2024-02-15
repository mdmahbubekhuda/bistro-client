import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import Users from "../pages/Dashboard/Users/Users";
import Cart from "../pages/Dashboard/Cart/Cart";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminRoutes from "./AdminRoutes";
import AddMenuItem from "../pages/Dashboard/AddMenuItem/AddMenuItem";

export const router = createBrowserRouter([
  // main
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },

  // dashboard

  {
    path: "dashboard",
    element: (
      <ProtectedRoutes>
        <Dashboard />
      </ProtectedRoutes>
    ),
    children: [
      // admin routes
      {
        path: "users",
        element: (
          <AdminRoutes>
            <Users />
          </AdminRoutes>
        ),
      },
      {
        path: "addMenu",
        element: (
          <AdminRoutes>
            <AddMenuItem />
          </AdminRoutes>
        ),
      },
      {
        path: "manageMenu",
      },

      // user routes
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
