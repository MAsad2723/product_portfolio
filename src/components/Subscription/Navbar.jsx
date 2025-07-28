import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const Links = (route, text) => {
    return (
      <Link
        className={`linkStyle text-base ${
          location.pathname === route ? "selected" : ""
        }`}
        to={route}
      >
        <div className="relative w-fit flex flex-col gap-2">
          <div>{text}</div>
          {location.pathname === route && (
            <div className="absolute left-0 right-0 mx-auto top-8">
              <svg
                className="mx-auto"
                width="21"
                height="8"
                viewBox="0 0 21 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 0.5L0 7V8H20.5C20.9 8 20.3333 7 20 6.5L10.5 0.5Z"
                  fill="#FF9D00"
                />
              </svg>
              <div style={{ border: "1px solid #FF9D00" }} />
            </div>
          )}
        </div>
      </Link>
    );
  };
  return (
    <div
      className="flex justify-between items-center"
      style={{
        paddingInline: "12vw",
        height: "62px",
        backgroundColor: "#FBE3D838",
      }}
    >
      <style jsx>
        {`
          .linkStyle {
            color: #0f132499;
          }
          .linkStyle.selected {
            color: #ff9d00;
          }
        `}
      </style>
      <div className="text-3xl">Logo</div>
      <div className="flex gap-16">
        {Links("/", "Home")}
        {Links("/about", "About")}
        {Links("/packages", "Packages")}
        {Links("/contact", "Contact Us")}
        {Links("/dashboard", "Dashboard")}
      </div>
      <div
        className="flex justify-center items-center gap-1 px-3 rounded-full h-[40px] "
        style={{
          border: "1px solid",
          borderImageSource:
            "radial-gradient(207.13% 207.13% at -33.59% -5.09%, #FEF3E9 0%, #FEF3E9 8.82%, #FEF3E9 17.54%, #FEF4EA 34.6%, #FCEADF 62.84%, #F9DED3 87.02%, #F8E6DD 100%)",
          boxShadow: "0px 1px 5px 0px #14151A1A",
          background:
            "radial-gradient(207.13% 207.13% at -33.59% -5.09%, #F8E6DD 0%, #F9DED3 12.98%, #FCEADF 37.16%, #FEF4EA 65.4%, #FEF3E9 82.46%, #FEF3E9 91.18%, #FEF3E9 100%)",
        }}
      >
        <div className="text-sm font-normal">Contact Us</div>
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4768 9.16591L9.00683 4.69591L10.1852 3.51758L16.6668 9.99924L10.1852 16.4809L9.00683 15.3026L13.4768 10.8326H3.3335V9.16591H13.4768Z"
              fill="#0F1324"
              fill-opacity="0.6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
