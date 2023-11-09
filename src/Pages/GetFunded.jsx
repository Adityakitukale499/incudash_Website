import React from "react";

import Funds from "../components/Fund/Funds";
import Investors from "../components/Fund/Investors";
import MainSection from "../components/MainSection";

const GetFunded = () => {
  return (
    <>
      <MainSection routeName={"Get Funded"} />
      <Funds />
      <Investors />
    </>
  );
};

export default GetFunded;
