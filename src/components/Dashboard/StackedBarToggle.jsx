import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

const labels = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];

const allDatasets = [
  {
    label: "On hold",
    data: [50, 40, 45, 42, 48, 35, 52],
    backgroundColor: "#D333E8", // gray
    stack: "stack1",
    barThickness: 10,
    borderRadius: 10,
  },
  {
    label: "Rejected",
    data: [120, 100, 110, 105, 115, 90, 125],
    backgroundColor: "#ef4444",
    stack: "stack1",
    barThickness: 10,
    borderRadius: 10,
  },
  {
    label: "Shortlisted",
    data: [90, 70, 80, 75, 85, 60, 95],
    backgroundColor: "#facc15",
    stack: "stack1",
    barThickness: 10,
    borderRadius: 10,
  },
  {
    label: "Applications",
    data: [100, 80, 90, 85, 95, 70, 105],
    backgroundColor: "#3b82f6",
    stack: "stack1",
    barThickness: 10,
    borderRadius: 10,
  },
];

export default function StackedBarToggle() {
  const [visible, setVisible] = useState({
    Applications: true,
    Shortlisted: true,
    Rejected: true,
    "On hold": false,
  });

  const toggle = (key) =>
    setVisible((prev) => ({ ...prev, [key]: !prev[key] }));
  const data = {
    labels,
    datasets: [...allDatasets.filter((el) => visible[el.label])],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: false,
        text: "Stacked Bar Chart with Custom Bar Width",
      },
    },
    scales: {
      x: {
        stacked: true,
        barThickness: 10, // fixed bar width in pixels
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow space-y-4">
      <div className="font-semibold text-lg">
        Statistics of active applications
      </div>
      <Bar data={data} options={options} />

      {/* Toggle Legend */}
      <div className="flex flex-wrap gap-4 pt-2 text-sm items-center">
        {Object.keys(allDatasets)
          .reverse()
          .map((key) => (
            <label key={key} className="flex items-center gap-1 cursor-pointer">
              <input
                id={key}
                type="checkbox"
                checked={visible[allDatasets[key].label]}
                onChange={() => toggle(allDatasets[key].label)}
                className="accent-blue-600 hidden"
              />
              <label htmlFor={key}>
                {visible[allDatasets[key].label] ? (
                  <svg
                    width="28"
                    height="17"
                    viewBox="0 0 28 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_454_5318)">
                      <path
                        d="M0 9C0 4.58172 3.58172 1 8 1H20C24.4183 1 28 4.58172 28 9C28 13.4183 24.4183 17 20 17H8C3.58172 17 0 13.4183 0 9Z"
                        fill={allDatasets[key].backgroundColor}
                      />
                      <g filter="url(#filter0_d_454_5318)">
                        <path
                          d="M14 9C14 5.68629 16.6863 3 20 3C23.3137 3 26 5.68629 26 9C26 12.3137 23.3137 15 20 15C16.6863 15 14 12.3137 14 9Z"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_454_5318"
                        x="12"
                        y="2"
                        width="16"
                        height="16"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0784314 0 0 0 0 0.0823529 0 0 0 0 0.101961 0 0 0 0.05 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_454_5318"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_454_5318"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_454_5318">
                        <path
                          d="M0 9C0 4.58172 3.58172 1 8 1H20C24.4183 1 28 4.58172 28 9C28 13.4183 24.4183 17 20 17H8C3.58172 17 0 13.4183 0 9Z"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    width="28"
                    height="17"
                    viewBox="0 0 28 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_454_5325)">
                      <path
                        d="M0 9C0 4.58172 3.58172 1 8 1H20C24.4183 1 28 4.58172 28 9C28 13.4183 24.4183 17 20 17H8C3.58172 17 0 13.4183 0 9Z"
                        fill="#BABDC5"
                      />
                      <g filter="url(#filter0_d_454_5325)">
                        <path
                          d="M2 9C2 5.68629 4.68629 3 8 3C11.3137 3 14 5.68629 14 9C14 12.3137 11.3137 15 8 15C4.68629 15 2 12.3137 2 9Z"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_454_5325"
                        x="0"
                        y="2"
                        width="16"
                        height="16"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0784314 0 0 0 0 0.0823529 0 0 0 0 0.101961 0 0 0 0.05 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_454_5325"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_454_5325"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_454_5325">
                        <path
                          d="M0 9C0 4.58172 3.58172 1 8 1H20C24.4183 1 28 4.58172 28 9C28 13.4183 24.4183 17 20 17H8C3.58172 17 0 13.4183 0 9Z"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </label>
              <span
                className="px-2 py-1 rounded-full"
                style={{
                  color: "#000",
                }}
              >
                {allDatasets[key].label}
              </span>
            </label>
          ))}
      </div>
    </div>
  );
}
