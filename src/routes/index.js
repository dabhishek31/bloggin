import { Container } from "@mui/material";
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../components/home/index"));
const About = lazy(() => import("../components/about/index"));

const AppRoutes = () => {
  return (
    <Container fixed>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default AppRoutes;
