import React from "react";

import PricingComparision from "../components/Pricing/PricingComparision";
import MainSection from "../components/MainSection";

const Pricing = () => {
  return (
    <div>
      <MainSection routeName={"Pricing"} />
      <PricingComparision />
    </div>
  );
};

export default Pricing;
