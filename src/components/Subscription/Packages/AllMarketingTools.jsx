import React from "react";
import MarketingTools from "./MarketingTools";

const AllMarketingTools = ({ price, setPrice }) => {
  return (
    <>
      <MarketingTools
        heading={"Basic email campaign templates"}
        body={"Ready-to-use email designs for marketing and engagement."}
        toolPrice={2500}
        price={price}
        setPrice={setPrice}
        included={true}
      />
      <MarketingTools
        heading={"Social media scheduler"}
        body={"Plan and publish posts across all major social platforms."}
        toolPrice={5000}
        price={price}
        setPrice={setPrice}
        included={false}
      />
      <MarketingTools
        heading={"Advanced segmentation"}
        body={"Create targeted lists using customer behavior and data."}
        toolPrice={7500}
        price={price}
        setPrice={setPrice}
        included={false}
      />
      <MarketingTools
        heading={"Customer lifetime value tracking"}
        body={"Analyze how much revenue each customer brings over time."}
        toolPrice={10000}
        price={price}
        setPrice={setPrice}
        included={false}
      />
      <MarketingTools
        heading={"Weekly performance reports"}
        body={"Get automated weekly insights on store performance."}
        toolPrice={50000}
        price={price}
        setPrice={setPrice}
        included={false}
      />
    </>
  );
};

export default AllMarketingTools;
