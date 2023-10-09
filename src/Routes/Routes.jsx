import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Page/Home/Home";
import Details from "../Page/Details/Details";
import Login from "../Page/Login/Login";
import Register from "../Page/Login/Register";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },

      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <Details></Details>,
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default routes;
