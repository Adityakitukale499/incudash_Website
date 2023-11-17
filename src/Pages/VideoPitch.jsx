import React from "react";

import VideoBody from "../components/VideoPitch/VideoBody";
import NeedVideo from "../components/VideoPitch/NeedVideo";
import VideoHelp from "../components/VideoPitch/VideoHelp";
import Partners from "../components/VideoPitch/Partners";
import Portfolio from "../components/VideoPitch/Portfolio";

import MainSection from "../components/MainSection";
import GetinTouch from "../components/GetinTouch";
import Testimonial from "../components/TestimonialSection";
import Achievment from "../components/Home/Achievment";

const VideoPitch = () => {
  return (
    <>
      <MainSection routeName={"Video Pitch"} />
      <VideoBody />
      <NeedVideo />
      <Achievment />
      <VideoHelp />
      <Partners />
      <Testimonial />
      <Portfolio />
      <GetinTouch />
    </>
  );
};

export default VideoPitch;
