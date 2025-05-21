import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Contact from "../pages/Contact";
import DetailsPage from "../pages/DetailsPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyProfile from "../pages/MyProfile";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
        loader: () => fetch("/users.json").then((res) => res.json()),
      },
      {
        path: "/details/:id",
        Component: DetailsPage,
        loader: () => fetch("/users.json").then((res) => res.json()),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
