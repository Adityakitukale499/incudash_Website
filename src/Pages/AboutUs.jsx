import React from "react";

import Body from "../components/AboutUs/Body";
import Team from "../components/AboutUs/Team";
import MainSection from "../components/MainSection";

const AboutUs = () => {
  return (
    <>
      <MainSection routeName={"About Us"} />
      <Body />
      <Team />
    </>
  );
};

export default AboutUs;
