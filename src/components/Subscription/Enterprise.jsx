import React from "react";
import useSubscriptionType from "./StateStore/SubscriptionType";
import usePackageType from "./StateStore/PackageType";
import MonthlyBasic from "./Enterprise/MonthlyBasic";
import MonthlyPro from "./Enterprise/MonthlyPro";
import YearlyBasic from "./Enterprise/YearlyBasic";
import YearlyPro from "./Enterprise/YearlyPro";
const Enterprise = () => {
  const { activeSubscription } = useSubscriptionType();
  const { activePackage } = usePackageType();
  return (
    <div>
      {activeSubscription === "monthly" ? (
        <div>
          {activePackage === "basic" ? <MonthlyBasic /> : <MonthlyPro />}
        </div>
      ) : (
        <div>{activePackage === "basic" ? <YearlyBasic /> : <YearlyPro />}</div>
      )}
    </div>
  );
};

export default Enterprise;
