import { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";

import "../styles/LineGraph.css";

function LineGraph() {
  const chartRef = useRef(null);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Redux
  const coin = useSelector((state) => state.coin.coin);
  const interval = useSelector((state) => state.chartInterval.chartInterval);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.coincap.io/v2/assets/${coin}/history?interval=${interval}`
      );
      const json = await response.json();

      // Give the API some time to respond and check if data is there
      setTimeout(() => {
        if (json.data && json.data.length > 0) {
          const last20Data = json.data.slice(-20);
          const minPrice = Math.min(...last20Data.map((d) => d.priceUsd));
          const maxPrice = Math.max(...last20Data.map((d) => d.priceUsd));

          const chartLabels = last20Data.map((d) => {
            if (interval === "d1") {
              return d.date.slice(0, 10);
            }

            const unixTimestampMs = parseInt(d.time);
            const dateObject = new Date(unixTimestampMs);
            const humanReadableTime = dateObject.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });
            return humanReadableTime;
          });

          const chartData = {
            labels: chartLabels,
            datasets: [
              {
                label: `${capitalizeFirstLetter(coin)} Price`,
                data: last20Data.map((d) => d.priceUsd),
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
            ],
          };

          const chartOptions = {
            maintainAspectRatio: false,
            responsive: true,
            scales: {
              y: {
                min: minPrice,
                max: maxPrice,
                title: {
                  display: true,
                  text: "Price (USD)",
                },
              },
              x: {
                title: {
                  display: true,
                  text: "Time",
                },
              },
            },
            plugins: {},
          };

          // Destroy the old chart if it exists
          if (chartRef.current) {
            chartRef.current.destroy();
          }
          // Create a new chart
          chartRef.current = new Chart("myChart", {
            type: "line",
            data: chartData,
            options: {
              chartOptions,
            },
          });
        }
      }, 300);
    }
    fetchData();
  }, [coin, interval]);

  return (
    <div>
      <canvas id='myChart' className='my-canvas'></canvas>
    </div>
  );
}

export default LineGraph;
