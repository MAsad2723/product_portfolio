import React, { useState, useRef, useEffect } from "react";

const currencies = ["USD", "EUR", "GBP", "PKR", "INR"];

const CurrencyDropdown = () => {
  const [selected, setSelected] = useState("USD");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex justify-center items-center gap-1 px-3 rounded-full h-[40px] cursor-pointer bg-white"
        style={{
          border: `1px solid #DEE0E3`,
          boxShadow: "0px 1px 5px 0px #14151A1A",
        }}
      >
        <div className="text-sm font-normal">{selected}</div>
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white border border-gray-200 z-20">
          <ul className="py-1 text-sm text-gray-700">
            {currencies.map((currency) => (
              <li
                key={currency}
                onClick={() => {
                  setSelected(currency);
                  setOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {currency}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CurrencyDropdown;
