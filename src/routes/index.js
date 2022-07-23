import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import BlogView from "../components/blog";

const Home = lazy(() => import("../components/home/index"));
const About = lazy(() => import("../components/about/index"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/id/:id" element={<BlogView />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
