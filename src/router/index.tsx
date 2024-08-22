import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import External from "../themes/Authentication"
import Login from "../pages/User/Auth/Login";
import Register from "../pages/User/Auth/Register";
import ForgotPassword from "../pages/User/Auth/ForgotPassword";
import ResetPassword from "../pages/User/Auth/ResetPassword";

import Layout from "../themes";
import ProtectedRoute from "@/router/ProtectedRoute";
import UnauthenticatedRoute from "@/router/UnauthenticatedRoute";

function Router() {
  const routes = [
    {
        element : <ProtectedRoute />,
        children : [
            {
                element: <Layout />,
                children: [
                    {
                        path: "/",
                        element: <Home />,
                    }]
            }
        ],
    },
    {
        element : <UnauthenticatedRoute />,
        children : [
            {
                element: <External />,
                children : [
                    {
                        path: "login",
                        element: <Login />,
                    },
                    {
                        path: "register",
                        element: <Register />,
                    },
                    {
                        path: "forgot-password",
                        element: <ForgotPassword />,
                    },
                    {
                        path: "reset-password",
                        element: <ResetPassword />,
                    },
                ]
            },
        ]
    }

  ];

  return useRoutes(routes);
}

export default Router;
