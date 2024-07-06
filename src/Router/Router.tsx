import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "../features/body";
import Browse from "../features/browse";
import Login from "../features/login";
import Posts from "../features/posts/Posts";
import { postLoader } from "./loaders/postLoader";
import { loginAction } from "./actions/loginAction";

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
    action: loginAction,
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
