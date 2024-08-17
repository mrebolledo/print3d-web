import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import External from "../themes/Authentication"
import Login from "../pages/User/Auth/Login";
import Register from "../pages/User/Auth/Register";
import ForgotPassword from "../pages/User/Auth/ForgotPassword";
import ResetPassword from "../pages/User/Auth/ResetPassword";

import Layout from "../themes";

function Router() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        }]
    },
    {
      path : "/",
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

  ];

  return useRoutes(routes);
}

export default Router;
