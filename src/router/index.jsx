import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import SuperHeroes from "../pages/superhero/SuperHeroes";
import RQSuperHeroes from "../pages/superhero/RQSuperHeroes";

const router = createBrowserRouter([
  {
    // homepage
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/superheroes",
        element: <SuperHeroes />,
      },
      {
        path: "/rq-superhero",
        element: <RQSuperHeroes />,
      },
    ],
  },
  //   404
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
