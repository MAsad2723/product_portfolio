import React from "react";

const PackageCard = ({ children }) => {
  return (
    <div
      className="h-full p-4 rounded-2xl"
      style={{
        background:
          "radial-gradient(207.13% 207.13% at -33.59% -5.09%, #F8E6DD 0%, #F9DED3 12.98%, #FCEADF 37.16%, #FEF4EA 65.4%, #FEF3E9 82.46%, #FEF3E9 91.18%, #FEF3E9 100%)",
        width: "35vw",
      }}
    >
      {children}
    </div>
  );
};

export default PackageCard;
