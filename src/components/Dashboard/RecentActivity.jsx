import React from "react";
import {
  DraftJob,
  JobClosed,
  PostUpdate,
  RecentActivityHeaderButton,
  Renew,
} from "../SVG";
import SingleActivity from "./SingleActivity";

const RecentActivity = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="text-base font-medium">Recent Activity</div>
        <RecentActivityHeaderButton />
      </div>

      <SingleActivity
        SVG={Renew}
        textContent={
          <div>
            Your subscription expires today <br />
            <a href="#" className="text-[#674FC7]">
              Renew now
            </a>
          </div>
        }
      />
      <SingleActivity
        SVG={PostUpdate}
        textContent={
          "There are 4 new applications for Lead Python Developer post."
        }
      />
      <SingleActivity
        SVG={JobClosed}
        textContent={<div>You have closed the job for Sr UI/UX Developer.</div>}
      />
      <SingleActivity
        SVG={DraftJob}
        textContent={<div>You have drafted a job for Sr UI/UX Designer.</div>}
      />
    </div>
  );
};

export default RecentActivity;
