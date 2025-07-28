import React, { useState } from "react";
import { ToggleOff, ToggleOn } from "../SVG";

const Job = ({ jobPosition }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="h-[63px] w-full py-2 px-[10px] flex justify-between items-center"
      style={{
        background:
          "radial-gradient(207.13% 207.13% at -33.59% -5.09%, #F8E6DD 0%, #F9DED3 12.98%, #FCEADF 37.16%, #FEF4EA 65.4%, #FEF3E9 82.46%, #FEF3E9 91.18%, #FEF3E9 100%)",
      }}
    >
      <div className="flex gap-[14px] items-center">
        <div className="w-11 h-11 bg-white flex justify-center items-center font-medium text-xl ">
          15
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-medium">
            {jobPosition ?? "Sr. UI/UX Designer"}
          </div>
          <div className="text-xs font-medium text-[#0D112666]">
            Total application
          </div>
        </div>
      </div>
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <ToggleOn /> : <ToggleOff />}
      </div>
    </div>
  );
};

export default Job;
