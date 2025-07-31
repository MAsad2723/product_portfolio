// Install these before running:
// npm install chart.js react-chartjs-2

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import {
  Gauge,
  gaugeClasses,
  LineChart,
  lineElementClasses,
} from "@mui/x-charts";
import StackedBarToggle from "./StackedBarToggle";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title
);

// MOCK API DATA
const getDashboardStats = async () => {
  return {
    totalApplications: 5345,
    shortlisted: 5345,
    rejected: 5345,
    statsApplied: [400, 350, 420, 370, 440, 300, 460],
    statsShortlisted: [150, 130, 160, 140, 170, 120, 180],
    statsRejected: [250, 220, 260, 230, 270, 180, 280],
    statsLabels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    timings: [200, 300, 310, 370, 340, 360, 330],
    timingLabels: ["8 AM", "10 AM", "12 AM", "2 PM", "4 PM", "6 PM", "8 PM"],
  };
};

const StatCard = ({
  label,
  value,
  percentage,
  color,
  badgeTextColor,
  badgeBgColor,
  svgID,
}) => {
  const settings = {
    width: 100,
    height: 100,
    value: percentage,
  };
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <div className="text-md font-medium text-[#0D112666]">{label}</div>
          <div className="text-2xl font-bold">{value}</div>
          <div
            className={`text-sm font-medium w-fit p-1 rounded-md flex items-center`}
            style={{ color: badgeTextColor, backgroundColor: badgeBgColor }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00196 4.707L3.69846 9.0105L2.99146 8.3035L7.29446 4H3.50196V3H9.00196V8.5H8.00196V4.707Z"
                fill={badgeTextColor}
              />
            </svg>
            +{percentage}%
          </div>
        </div>
        <Gauge
          {...settings}
          startAngle={0}
          endAngle={-360}
          text={`+${percentage}%`}
          cornerRadius="50%"
          sx={(theme) => ({
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: 16,
              "& tspan": {
                fill: `${color} !important`, // ✅ Set color here
              },
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: `url(#${svgID})`,
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              fill: "#EEF1F9",
            },
          })}
        />
      </div>
    </div>
  );
};

const Stats = ({ data }) => {
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gaugeGradient1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFB596" />
            <stop offset="100%" stopColor="#FE8F96" />
          </linearGradient>
        </defs>
      </svg>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gaugeGradient2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#87C5F7" />
            <stop offset="100%" stopColor="#3397E8" />
          </linearGradient>
        </defs>
      </svg>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gaugeGradient3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF6467" />
            <stop offset="100%" stopColor="#FD9B9B" />
          </linearGradient>
        </defs>
      </svg>
      <StatCard
        label="Total Application"
        value={data.totalApplications}
        percentage={74}
        color="#FE9196"
        svgID={"gaugeGradient1"}
        badgeBgColor={"#D1FAE4"}
        badgeTextColor={"#166E3F"}
      />
      <StatCard
        label="Shortlisted candidates"
        value={data.shortlisted}
        percentage={60}
        color="#3699E9"
        svgID={"gaugeGradient2"}
        badgeBgColor={"#FDEAD8"}
        badgeTextColor={"#AE590A"}
      />
      <StatCard
        label="Rejected candidates"
        value={data.rejected}
        percentage={14}
        color="#FF686B"
        svgID={"gaugeGradient3"}
        badgeBgColor={"#FCE5E4"}
        badgeTextColor={"#9A1C13"}
      />
    </>
  );
};

const BarChart = ({ labels, apps, shortlists, rejections }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Applications",
        data: apps,
        backgroundColor: "#3b82f6",
      },
      {
        label: "Shortlisted",
        data: shortlists,
        backgroundColor: "#facc15",
      },
      {
        label: "Rejected",
        data: rejections,
        backgroundColor: "#ef4444",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
    },
  };
  return <Bar data={data} options={options} />;
};

const LineChartComponent = ({ data }) => {
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="1" x2="0" y2="0">
            <stop offset="-6.34%" stopColor="rgba(255, 181, 150, 0)" />
            <stop offset="100%" stopColor="rgba(254, 143, 150, 0.3)" />
          </linearGradient>
        </defs>
      </svg>

      <style jsx>
        {`
          .MuiAreaElement-root.MuiAreaElement-series-auto-generated-id-0 {
            stroke: #fe9196;
          }
          .MuiMarkElement-root.MuiMarkElement-series-auto-generated-id-0.MuiMarkElement-animate.css-1qrs7yy {
            fill: #fe9196;
            stroke: #fe9196;
          }
        `}
      </style>
      <LineChart
        height={300}
        series={[
          {
            data: data.timings,
            area: true,
            showMark: true,
            showLine: true,
            color: "url(#lineGradient)",
          },
        ]}
        xAxis={[{ scaleType: "point", data: data.timingLabels }]}
        sx={{
          [`& .${lineElementClasses.root}`]: {
            display: "none",
          },
        }}
        margin={{ right: 24 }}
      />
    </>
  );
};

export default function Main() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getDashboardStats().then(setData);
  }, []);

  if (!data) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 space-y-8 w-[56.5vw]">
      <div className="flex justify-between">
        <div className="text-xl font-semibold">Dashboard</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Stats data={data} />
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <div className="text-lg font-semibold mb-4">
          Statistics of active applications
        </div>
        {/* <BarChart
          labels={data.statsLabels}
          apps={data.statsApplied}
          shortlists={data.statsShortlisted}
          rejections={data.statsRejected}
        /> */}
        <StackedBarToggle />
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <div className="text-lg font-semibold mb-4">
          Application received time
        </div>
        <LineChartComponent data={data} />
      </div>
    </div>
  );
}
