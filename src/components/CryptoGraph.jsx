import React from "react";
import DateFunction from "./shared/DateFunction";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CryptoGraph({ coins, pastValue, selectedCoin }) {
  const options = {
    responsive: true,
    maintainAspectRation: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: selectedCoin,
      },
    },
  };

  const data = {
    labels: DateFunction(),
    datasets: [
      {
        label: "Daily Price",
        data: pastValue.prices,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
}

export default CryptoGraph;
