import React from "react";

import VideoBody from "../components/VideoPitch/VideoBody";
import NeedVideo from "../components/VideoPitch/NeedVideo";
import Achievments from "../components/VideoPitch/Achievments";
import VideoHelp from "../components/VideoPitch/VideoHelp";
import Partners from "../components/VideoPitch/Partners";
import Portfolio from "../components/VideoPitch/Portfolio";

import MainSection from "../components/MainSection";
import GetinTouch from "../components/GetinTouch";
import Testimonial from "../components/TestimonialSection";

const VideoPitch = () => {
  return (
    <>
      <MainSection routeName={"Video Pitch"} />
      <VideoBody />
      <NeedVideo />
      <Achievments />
      <VideoHelp />
      <Partners />
      <Testimonial />
      <Portfolio />
      <GetinTouch />
    </>
  );
};

export default VideoPitch;
