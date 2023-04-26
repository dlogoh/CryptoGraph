import { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";

function LineGraph() {
  const [data, setData] = useState(null);
  const chartRef = useRef(null);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Redux
  const coin = useSelector((state) => state.coin.coin);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.coincap.io/v2/assets/${coin}/history?interval=m5`
      );
      const json = await response.json();

      // Give the API some time to respond and check if data is there
      setTimeout(() => {
        if (json.data && json.data.length > 0) {
          const last20Data = json.data.slice(-20);
          const minPrice = Math.min(...last20Data.map((d) => d.priceUsd));
          const maxPrice = Math.max(...last20Data.map((d) => d.priceUsd));

          const chartLabels = last20Data.map((d) => {
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
              },
            },
          };

          setData(chartData);
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
      }, 500);
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* Add height later for responsiveness */}
      <canvas id='myChart'></canvas>
    </div>
  );
}

export default LineGraph;
