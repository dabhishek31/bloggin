import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import CircularLoader from "../components/common/loader";

const Home = lazy(() => import("../components/home"));
const About = lazy(() => import("../components/about"));
const BlogView = lazy(() => import("../components/blog"));
const GenericNotFound = lazy(() => import("../components/notfound"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<CircularLoader />}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/blog/:id" element={<BlogView />} />
        <Route path="*" element={<GenericNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
