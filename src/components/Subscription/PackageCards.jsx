import React from "react";
import PackageCard from "./PackageCard";
import Business from "./Business";
import Enterprise from "./Enterprise";

const PackageCards = () => {
  return (
    <div className="flex justify-between ">
      <PackageCard>
        <Business />
      </PackageCard>
      <PackageCard>
        <Enterprise />
      </PackageCard>
    </div>
  );
};

export default PackageCards;
