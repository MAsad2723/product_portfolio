import React from "react";
import Job from "./Job";
import { Plus2 } from "../SVG";

const JobsPosted = () => {
  return (
    <div className="flex flex-col items-center justify-between mt-5 gap-5">
      <div className="flex items-center justify-between w-full">
        <div className="text-base font-medium">Job Posted</div>
        <div
          style={{
            background:
              "radial-gradient(207.13% 207.13% at -33.59% -5.09%, #FEF3E9 0%, #FEF3E9 8.82%, #FEF3E9 17.54%, #FEF4EA 34.6%, #FCEADF 62.84%, #F9DED3 87.02%, #F8E6DD 100%)",
          }}
          className="p-[1px] rounded-full"
        >
          <div
            style={{
              background:
                "radial-gradient(207.13% 207.13% at -33.59% -5.09%, #F8E6DD 0%, #F9DED3 12.98%, #FCEADF 37.16%, #FEF4EA 65.4%, #FEF3E9 82.46%, #FEF3E9 91.18%, #FEF3E9 100%)",
            }}
            className="flex gap-1 items-center rounded-full px-2 py-1"
          >
            <Plus2 />
            <div className="text-sm font-medium" style={{ lineHeight: "10px" }}>
              Add
            </div>
          </div>
        </div>
      </div>
      <Job />
      <Job />
      <Job />
    </div>
  );
};

export default JobsPosted;
