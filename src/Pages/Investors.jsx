import React from "react";

import Investor from "../components/AnInvestor/Investor";
import MainSection from "../components/MainSection";

const Investors = () => {
  return (
    <>
      <MainSection routeName={"Become an Investor"} />
      <Investor />
    </>
  );
};

export default Investors;
