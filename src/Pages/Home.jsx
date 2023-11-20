import React from "react";
import Achievments from "../components/Achievment";
import Body from "../components/Home/Body";
import Cards from "../components/Home/Cards";

import DescriptionNumbers from "../components/Home/DescriptionNumbers";
import FeatureSection from "../components/Home/FeatureSection";

import Fund from "../components/Home/Fund";
import Hero from "../components/Home/Hero";
import LatestUpdates from "../components/Home/LatestUpdates";
import Portfolio from "../components/Home/Portfolio";
import Subscribe from "../components/Home/Subscribe";
import Testimonial from "../components/TestimonialSection";
import GetInTouch from "../components/GetinTouch";
import { Box } from "@mui/material";
import Services from "../components/Services";

const Home = () => {
  return (
    <Box sx={{mt:{md:'82px',xs:'0px'}}}>
      <Hero />
      <Achievments />
      <Body />
      <Cards />
      <Services />
      <Fund />
      {/* <DescriptionNumbers /> */}
      <Portfolio />
      {/* <LatestUpdates /> */}
      {/* <FeatureSection /> */}
      <Testimonial/>
      <GetInTouch />
      {/* <Subscribe /> */}
    </Box>
  );
};

export default Home;
