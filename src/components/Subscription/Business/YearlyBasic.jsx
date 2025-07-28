import React, { useEffect } from "react";
import NormalPackage from "../Packages/NormalPackage";
import MarketingTools from "../Packages/MarketingTools";
import { RightArrow } from "../../SVG";
import useYearlyBasicPrice from "../StateStore/BusinessYearlyBasicPrice";

const YearlyBasic = () => {
  const { price, setPrice } = useYearlyBasicPrice();
  useEffect(() => {
    return () => {
      setPrice(40000);
    };
  }, []);

  return (
    <>
      <div className="flex w-full flex-col gap-3">
        {/* Header */}
        <div className="flex flex-col gap-4 pb-4 px-6 border-b border-white">
          <div className="flex justify-between">
            <div className="text-2xl font-medium">Business</div>
            <div className="flex gap-2 items-center">
              <div className="text-xl font-normal line-through text-[#0A0F2940] ">
                {(44444).toLocaleString()}
              </div>
              <div className="text-3xl font-normal">
                {price.toLocaleString()}
              </div>
              <div
                className="h-5 rounded-md px-[4px] py-[2px] text-xs text-[#133A9A] bg-[#E3EAFD] flex items-center"
                style={{ border: "1px solid #0A0F2914" }}
              >
                USD
              </div>
            </div>
          </div>
          <div className="text-xs font-normal pe-10">
            Perfect for early-stage retailers looking to set up their online
            store and manage orders with ease.
          </div>
        </div>
        {/* Body */}
        <div className="flex flex-col gap-4">
          <NormalPackage
            heading={"Email support"}
            body={
              "Email-based assistance for general queries and technical issues."
            }
            status={true}
          />
          <NormalPackage
            heading={"AI Chat"}
            body={"Smart chatbot for automated customer support and FAQs."}
            status={false}
          />
          <NormalPackage
            heading={"Auto uploader"}
            body={"Upload products in bulk using CSV or integrated tools."}
            status={false}
          />
          <div className="h-[30px] bg-[#0A0F290A] px-6 text-sm font-medium flex items-center">
            Platform Features
          </div>
          <NormalPackage
            heading={"Online store builder with themes"}
            body={"Build your store with customizable e-commerce templates."}
            status={false}
          />
          <NormalPackage
            heading={"Order & inventory management"}
            body={
              "Manage stock, track orders, and sync inventory in real time."
            }
            status={false}
          />
          <NormalPackage
            heading={"Custom workflow automation"}
            body={"Automate repetitive tasks with custom rules and triggers."}
            status={false}
          />
          <div className="h-[30px] bg-[#0A0F290A] px-6 text-sm font-medium flex items-center">
            Marketing Tools
            <div className="relative group mx-1 w-80">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="9" cy="9" r="5.25" fill="white" />
                <path
                  d="M9 14.25C6.10043 14.25 3.75 11.8996 3.75 9C3.75 6.10043 6.10043 3.75 9 3.75C11.8996 3.75 14.25 6.10043 14.25 9C14.25 11.8996 11.8996 14.25 9 14.25ZM8.475 8.475V11.625H9.525V8.475H8.475ZM8.475 6.375V7.425H9.525V6.375H8.475Z"
                  fill="#4778F5"
                />
              </svg>
              <div className="absolute -mt-28 hidden group-hover:block bg-white border-2 border-gray-300 px-4 py-2 rounded-lg">
                <p className="text-xs font-normal">
                  Includes any one (excluding{" "}
                  <span className="font-medium">Advanced segmentation</span> &{" "}
                  <span className="font-medium">
                    Customer lifetime value tracking
                  </span>
                  ). Other services are available as add-ons.
                </p>
              </div>
            </div>
          </div>
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
        </div>
      </div>
      <div className="p-6">
        <div
          className="p-[1px] rounded-full"
          style={{
            background:
              "radial-gradient(100.32% 100.39% at -0.32% 8.93%, #ECB2A4 0%, #EDBEAE 12.98%, #FDE2BA 91.18%, #FECFA5 100%)",
          }}
        >
          <div
            className="w-full h-[56px] rounded-full bg-[#FEF3E9] px-4 py-2"
            style={{
              boxShadow: "0px 2px 6px 0px #D3C8BE4D",
            }}
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <div className="text-sm font-medium">Pay Online</div>
                <div className="text-xs font-normal">
                  Access account instantly
                </div>
              </div>
              <RightArrow />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YearlyBasic;
