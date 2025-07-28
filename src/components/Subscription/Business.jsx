import React from "react";
import useSubscriptionType from "./StateStore/SubscriptionType";
import usePackageType from "./StateStore/PackageType";
import MonthlyBasic from "./Business/MonthlyBasic";
import MonthlyPro from "./Business/MonthlyPro";
import YearlyBasic from "./Business/YearlyBasic";
import YearlyPro from "./Business/YearlyPro";

const Business = () => {
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

export default Business;
