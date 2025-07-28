import React from "react";

const SingleActivity = ({ SVG, textContent }) => {
  return (
    <div className="flex gap-[14px] items-center">
      <div>
        <SVG />
      </div>
      <div className="text-sm font-medium">{textContent}</div>
    </div>
  );
};

export default SingleActivity;
