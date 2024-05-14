import React, { useEffect, useRef } from "react";
// import ApexCharts from "react-apexcharts"; // Assuming you're using a library like ApexCharts for React
import config from "./leftDashBoard/config"; // Importing config
import Chart from 'react-apexcharts';
import ApexCharts from 'apexcharts'; // Import ApexCharts

const OrderStatisticsChart = () => {
  const chartRef = useRef(null);
  const cardColor = "#FFFFFF";
  const headingColor = "#000000";
  const axisColor = "#CCCCCC";

  const orderChartConfig = {
    chart: {
      height: 165,
      width: 130,
      type: "donut",
    },
    labels: ["Electronic", "Sports", "Decor", "Fashion"],
    series: [85, 15, 50, 50],
    colors: [
      config.colors.primary,
      config.colors.secondary,
      config.colors.info,
      config.colors.success,
    ],
    stroke: {
      width: 5,
      colors: cardColor,
    },
    dataLabels: {
      enabled: false,
      formatter: function (val, opt) {
        return parseInt(val) + "%";
      },
    },
    legend: {
      show: false,
    },
    grid: {
      padding: {
        top: 0,
        bottom: 0,
        right: 15,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: true,
            value: {
              fontSize: "1.5rem",
              fontFamily: "Public Sans",
              color: headingColor,
              offsetY: -15,
              formatter: function (val) {
                return parseInt(val) + "%";
              },
            },
            name: {
              offsetY: 20,
              fontFamily: "Public Sans",
            },
            total: {
              show: true,
              fontSize: "0.8125rem",
              color: axisColor,
              label: "Weekly",
              formatter: function (w) {
                return "38%";
              },
            },
          },
        },
      },
    },
  };

  useEffect(() => {
    if (chartRef.current) {
      const statisticsChart = new ApexCharts(
        chartRef.current,
        orderChartConfig
      );
      statisticsChart.render();
    }
  }, []);

  return (
    <div id="orderStatisticsChart" ref={chartRef}>
      {/* Chart will be rendered here */}
    </div>
  );
};

export default OrderStatisticsChart;
