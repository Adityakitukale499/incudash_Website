import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import OurServices from "../Pages/OurServices";
import GetFunded from "../Pages/GetFunded";
import VideoPitch from "../Pages/VideoPitch";
import Investors from "../Pages/Investors";
import Blogs from "../Pages/Blogs";
import Pricing from "../Pages/Pricing";
import ContactUs from "../Pages/ContactUs";
const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/getfunded" element={<GetFunded />} />

        <Route path="/videopitch" element={<VideoPitch />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default MyRoutes;
