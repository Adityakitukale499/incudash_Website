import React from "react";
import Achievments from "../components/Home/Achievment";
import Body from "../components/Home/Body";
import Cards from "../components/Home/Cards";

import DescriptionNumbers from "../components/Home/DescriptionNumbers";
import FeatureSection from "../components/Home/FeatureSection";

import Fund from "../components/Home/Fund";
import Hero from "../components/Home/Hero";
import LatestUpdates from "../components/Home/LatestUpdates";
import Portfolio from "../components/Home/Portfolio";
import Services from "../components/Home/Services";
import Subscribe from "../components/Home/Subscribe";
import GetinTouch from "../components/GetinTouch";
import Testimonial from "../components/VideoPitch/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <Achievments />
      <Body />
      <Cards />
      <Services />
      <Fund />
      <DescriptionNumbers />
      <Portfolio />
      <LatestUpdates />
      <FeatureSection />
      <Testimonial/>
      <GetinTouch />
      <Subscribe />
    </>
  );
};

export default Home;
