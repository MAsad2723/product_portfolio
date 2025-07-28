import React, { useState } from "react";
import { Check, Minus, Plus } from "../../SVG";

const MarketingTools = ({
  heading,
  body,
  toolPrice = 2500,
  price,
  setPrice,
  included,
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="flex flex-col gap-4 px-6">
      <div className="flex justify-between ">
        <div className="flex flex-col gap-[6px]">
          <div className="text-sm font-medium">{heading}</div>
          <div className="text-xs font-normal">{body}</div>
        </div>

        {active ? (
          <div>
            <Check />
          </div>
        ) : (
          <div
            className={"cursor-pointer"}
            onClick={() => {
              setActive(true);
              if (!included) setPrice(price + toolPrice);
            }}
          >
            <Plus />
          </div>
        )}
      </div>
      {active && (
        <div className="flex justify-between items-center">
          <div
            onClick={() => {
              setActive(false);
              if (!included) setPrice(price - toolPrice);
            }}
            className="cursor-pointer"
          >
            <Minus />
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`font-medium ${
                included
                  ? "text-base  text-[#0F132499]"
                  : "text-lg text-[black]"
              } ${included && "line-through"}`}
            >
              {toolPrice.toLocaleString()}
            </div>
            <div className="h-5 rounded-md px-[4px] py-[2px] text-xs font-medium text-[#0F132499] bg-[#E9EAEC] flex items-center">
              USD
            </div>
            <svg
              width="1"
              height="20"
              viewBox="0 0 1 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="19.5"
                x2="0.499999"
                y2="0.5"
                stroke="#DEE0E3"
              />
            </svg>
            {included ? (
              <div
                className="h-5 rounded-md px-[4px] py-[2px] text-xs font-medium flex items-center"
                style={{ color: "#133A9A", backgroundColor: "#E3EAFD" }}
              >
                Included
              </div>
            ) : (
              <div
                className="h-5 rounded-md px-[4px] py-[2px] text-xs font-medium flex items-center"
                style={{ color: "#FAB005", backgroundColor: "#FEEFCDB2" }}
              >
                Add-on
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketingTools;
