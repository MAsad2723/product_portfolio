import React from "react";
import {
  Community,
  Dashboard,
  Document,
  Jobs,
  Messages,
  Schedule,
  Statistics,
} from "../SVG";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const MenuButtons = (SVG, text, route) => {
    const location = useLocation();
    return (
      <Link to={route} className="relative">
        <div
          style={{
            width: "16vw",
            height: "44px",
            background:
              location.pathname === route &&
              "linear-gradient(90deg, #FFD7C0 0%, #E7D2CE 100%)",
          }}
          className="rounded-l-full flex p-4 items-center cursor-pointer gap-2"
        >
          <SVG />
          <div className="text-sm font-medium">{text}</div>
        </div>
        {location.pathname === route && (
          <svg
            className="absolute"
            style={{ right: 0, top: "-11px" }}
            width="14"
            height="65"
            viewBox="0 0 14 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path opacity="0.8" d="M0 65L14 55L0 51V65Z" fill="#E8D3CE" />
            <path opacity="0.8" d="M0 0L14 11L0 14V0Z" fill="#E8D3CE" />
          </svg>
        )}
      </Link>
    );
  };
  return (
    <div
      style={{
        background:
          "radial-gradient(207.13% 207.13% at -33.59% -5.09%, #F8E6DD 0%, #F9DED3 12.98%, #FCEADF 37.16%, #FEF4EA 65.4%, #FEF3E9 82.46%, #FEF3E9 91.18%, #FEF3E9 100%)",
        width: "20vw",
      }}
      className="h-full fixed left-0 p-6"
    >
      <div className="font-semibold text-2xl text-center">Sample Logo</div>
      <div className="flex flex-col mt-11 absolute -right-3.5 gap-6">
        {MenuButtons(Dashboard, "Dashboard", "/dashboard")}
        {MenuButtons(Jobs, "Jobs", "/dashboard/jobs")}
        {MenuButtons(Schedule, "Schedule", "/dashboard/schedule")}
        {MenuButtons(Document, "Document", "/dashboard/document")}
        {MenuButtons(Statistics, "Statistics", "/dashboard/statistics")}
        {MenuButtons(Community, "Community", "/dashboard/community")}
        {MenuButtons(Messages, "Messages", "/dashboard/messages")}
      </div>
    </div>
  );
};

export default Sidebar;
