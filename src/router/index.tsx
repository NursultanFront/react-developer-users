import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeView from "../pages/HomeView/HomeView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Outlet />,
        children: [
          {
            path: "/",
            element: <HomeView />,
          },
        ],
      },
    ],
  },
]);
