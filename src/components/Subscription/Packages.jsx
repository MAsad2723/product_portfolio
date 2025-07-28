import CurrencyDropdown from "./CurrencyDropdown";
import PackageCards from "./PackageCards";
import useSubscriptionType from "./StateStore/SubscriptionType";
import usePackageType from "./StateStore/PackageType";

const Packages = () => {
  const { activeSubscription, setActiveSubscription } = useSubscriptionType();
  const { activePackage, setActivePackage } = usePackageType();
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex justify-center items-center gap-2">
        <div className="flex flex-col gap-1 w-full">
          <div className="text-2xl font-semibold">Select subscription</div>
          <div className="text-sm text-[#0F132499]">
            Select the package you think is good for your business.
          </div>
        </div>
        <div
          className="flex justify-center items-center gap-1 ps-3 rounded-full h-[40px] cursor-pointer "
          onClick={() => setActiveSubscription("monthly")}
          style={{
            border: `1px solid ${
              activeSubscription === "monthly" ? "" : "#DEE0E3"
            }`,
            borderImageSource:
              activeSubscription === "monthly"
                ? "radial-gradient(207.13% 207.13% at -33.59% -5.09%, #FEF3E9 0%, #FEF3E9 8.82%, #FEF3E9 17.54%, #FEF4EA 34.6%, #FCEADF 62.84%, #F9DED3 87.02%, #F8E6DD 100%)"
                : "",
            boxShadow: "0px 1px 5px 0px #14151A1A",
            background:
              activeSubscription === "monthly"
                ? "radial-gradient(207.13% 207.13% at -33.59% -5.09%, #F8E6DD 0%, #F9DED3 12.98%, #FCEADF 37.16%, #FEF4EA 65.4%, #FEF3E9 82.46%, #FEF3E9 91.18%, #FEF3E9 100%)"
                : "white",
          }}
        >
          <div className="text-sm font-medium px-5">Monthly</div>
          <div
            className="flex justify-center items-center gap-2 px-3 rounded-full h-[40px] w-max cursor-pointer "
            onClick={(e) => {
              setActiveSubscription("yearly");
              e.stopPropagation();
            }}
            style={{
              border: `1px solid ${
                activeSubscription === "yearly" ? "" : "#DEE0E3"
              }`,
              borderImageSource:
                activeSubscription === "yearly"
                  ? "radial-gradient(207.13% 207.13% at -33.59% -5.09%, #FEF3E9 0%, #FEF3E9 8.82%, #FEF3E9 17.54%, #FEF4EA 34.6%, #FCEADF 62.84%, #F9DED3 87.02%, #F8E6DD 100%)"
                  : "",
              boxShadow: "0px 1px 5px 0px #14151A1A",
              background:
                activeSubscription === "yearly"
                  ? "radial-gradient(207.13% 207.13% at -33.59% -5.09%, #F8E6DD 0%, #F9DED3 12.98%, #FCEADF 37.16%, #FEF4EA 65.4%, #FEF3E9 82.46%, #FEF3E9 91.18%, #FEF3E9 100%)"
                  : "white",
            }}
          >
            <div className="text-sm font-medium ps-5">Yearly</div>
            <div
              className="bg-[#E9EAEC] rounded-md text-xs text-[#0F132499] px-1 flex items-center"
              style={{
                border: "1px solid var(--border-base-alpha, #0A0F2914)",
              }}
            >
              Save 10%
            </div>
          </div>
        </div>
        <CurrencyDropdown />
      </div>
      <hr className="m-0" />
      {/* Select Packages */}
      <div className="flex items-center gap-2">
        <div
          className="flex justify-center items-center gap-1 px-3 rounded-full h-[40px] cursor-pointer transition-colors duration-300"
          onClick={() => setActivePackage("basic")}
          style={{
            border: `1px solid ${
              activeSubscription === "basic" ? "" : "#DEE0E3"
            }`,
            borderImageSource:
              activePackage === "basic"
                ? "radial-gradient(207.13% 207.13% at -33.59% -5.09%, #FEF3E9 0%, #FEF3E9 8.82%, #FEF3E9 17.54%, #FEF4EA 34.6%, #FCEADF 62.84%, #F9DED3 87.02%, #F8E6DD 100%)"
                : "",
            boxShadow: "0px 1px 5px 0px #14151A1A",
            background:
              activePackage === "basic"
                ? "radial-gradient(207.13% 207.13% at -33.59% -5.09%, #F8E6DD 0%, #F9DED3 12.98%, #FCEADF 37.16%, #FEF4EA 65.4%, #FEF3E9 82.46%, #FEF3E9 91.18%, #FEF3E9 100%)"
                : "white",
          }}
        >
          <div className="text-sm font-normal">Basic packages</div>
        </div>
        <div
          className="flex justify-center items-center gap-1 px-3 rounded-full h-[40px] cursor-pointer transition-colors duration-300"
          onClick={() => setActivePackage("pro")}
          style={{
            border: `1px solid ${
              activeSubscription === "pro" ? "" : "#DEE0E3"
            }`,
            borderImageSource:
              activePackage === "pro"
                ? "radial-gradient(207.13% 207.13% at -33.59% -5.09%, #FEF3E9 0%, #FEF3E9 8.82%, #FEF3E9 17.54%, #FEF4EA 34.6%, #FCEADF 62.84%, #F9DED3 87.02%, #F8E6DD 100%)"
                : "",
            boxShadow: "0px 1px 5px 0px #14151A1A",
            background:
              activePackage === "pro"
                ? "radial-gradient(207.13% 207.13% at -33.59% -5.09%, #F8E6DD 0%, #F9DED3 12.98%, #FCEADF 37.16%, #FEF4EA 65.4%, #FEF3E9 82.46%, #FEF3E9 91.18%, #FEF3E9 100%)"
                : "white",
          }}
        >
          <div className="text-sm font-normal">Pro packages</div>
        </div>
      </div>
      <PackageCards />
    </div>
  );
};

export default Packages;
