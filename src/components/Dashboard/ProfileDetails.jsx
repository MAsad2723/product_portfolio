import React, { useState } from "react";
import { Info, Location, Settings } from "../SVG";
import JobsPosted from "./JobsPosted";
import RecentActivity from "./RecentActivity";

const ProfileDetails = () => {
  const avatarSmall = process.env.PUBLIC_URL + "images/Avatar.png";
  const avatarLarge = process.env.PUBLIC_URL + "images/Avatar2.png";
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  return (
    <div className="bg-[#FEFAF7] fixed right-0 w-[23.5vw] h-full p-6 overflow-y-auto">
      <div className="flex items-center gap-6 justify-end">
        <Info />
        <Settings />
        <div className="relative inline-block text-left">
          <div
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            className="flex items-center cursor-pointer"
            onClick={() => setIsOpenDropdown(!isOpenDropdown)}
          >
            <img src={avatarSmall} alt="John Doe" />
            {/* Heroicon name: solid/chevron-down */}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Dropdown menu, show/hide based on menu state. */}
          {isOpenDropdown && (
            <div
              className="dropdown-menu absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  Settings
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-14 flex flex-col items-center gap-5">
        <img src={avatarLarge} alt="" />
        <div className="flex flex-col items-center gap-1">
          <div className="text-lg font-medium">John Doe</div>
          <div className="text-xs font-medium text-[#0D112666] ">
            Human Resource Manager
          </div>
          <div className="flex gap-1 items-center">
            <Location />
            <div className="text-xs font-medium text-[#8A38F5] ">
              United Arab Emirates
            </div>
          </div>
        </div>
      </div>
      <div
        className="m-0 mt-6 h-0"
        style={{ border: "1px solid #C2A59D", opacity: "0.2" }}
      />
      <JobsPosted />
      <div
        className="m-0 my-6 h-0"
        style={{ border: "1px solid #C2A59D", opacity: "0.2" }}
      />
      <RecentActivity />
    </div>
  );
};

export default ProfileDetails;
