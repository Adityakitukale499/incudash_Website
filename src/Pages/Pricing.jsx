import React from "react";

import PricingComparision from "../components/Pricing/PricingComparision";
import MainSection from "../components/MainSection";

const Pricing = () => {
  return (
    <>
      <MainSection routeName={"Pricing"} />
      <PricingComparision />
    </>
  );
};

export default Pricing;
