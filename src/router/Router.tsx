import { createBrowserRouter } from "react-router-dom";
import Browse from "../features/browse-1";
import Login from "../features/login-1";
import Posts from "../features/posts-1/Posts";
import { postLoader } from "./loaders/postLoader";
import { loginAction } from "./actions/loginAction";
import { Overview } from "../features/overview/Overview";

// Planning to implement the lazy loading concept

const routes = [
  {
    path: "/",
    element: <Overview />,
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
];

export const router = createBrowserRouter(routes, {
  basename: "/MovvieBovvie",
});
