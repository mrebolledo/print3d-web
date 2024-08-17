import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/User/Auth/Login";
import Register from "../pages/User/Auth/Register";

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
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
