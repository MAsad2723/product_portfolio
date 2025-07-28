import React from "react";
import { Check, Cross } from "../../SVG";

const NormalPackage = ({ heading, body, status }) => {
  return (
    <div className="flex justify-between px-6 ">
      <div className="flex flex-col gap-[6px]">
        <div className="text-sm font-medium">{heading}</div>
        <div className="text-xs font-normal">{body}</div>
      </div>
      <div>{status ? <Check /> : <Cross />}</div>
    </div>
  );
};

export default NormalPackage;
