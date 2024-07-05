import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "../features/Body";
import Browse from "../features/Browse";
import Login from "../features/Login";
import Posts from "../features/Posts/Posts";
import { postLoader } from "./loaders/postLoader";

// Planning to implement the lazy loading concept

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/posts",
    element: <Posts />,
    loader: postLoader,
  },
]);

const Router: FC = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default Router;
