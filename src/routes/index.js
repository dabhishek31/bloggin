import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import CircularLoader from "../components/common/loader";

const Home = lazy(() => import("../components/home"));
const BlogView = lazy(() => import("../components/blog"));
const GenericNotFound = lazy(() => import("../components/notfound"));
const ContactUs = lazy(() => import("../components/contactus"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<CircularLoader />}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/post/:id" element={<BlogView />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<GenericNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
