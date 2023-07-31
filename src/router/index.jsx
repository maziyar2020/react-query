// router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// pages
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import SuperHeroes from "../pages/superhero/SuperHeroes";
import { RQSuperHeroes } from "../pages/superhero/RQSuperHeroes";
import RQSuperHero from "../pages/superhero/RQSuperHero";
import { SuperHeroWrap } from "../pages/superhero/SuperHeroWrap";
import { Paralel } from "../pages/paralel/Paralel";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Dashboard />}>
      <Route index element={<Home />} />
      <Route path="superheroes" element={<SuperHeroes />} />
      <Route path="rq-superhero" element={<SuperHeroWrap />}>
        <Route index element={<RQSuperHeroes />} />
        <Route path=":id" element={<RQSuperHero />} />
      </Route>
      <Route path="paralel" element={<Paralel />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

export default router;
