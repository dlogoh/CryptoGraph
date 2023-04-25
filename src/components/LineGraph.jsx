import { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function LineGraph() {
  const [data, setData] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.coincap.io/v2/assets/bitcoin/history?interval=m5"
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
                label: "Bitcoin Price",
                data: last20Data.map((d) => d.priceUsd),
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
            ],
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
              scales: {
                y: {
                  min: minPrice,
                  max: maxPrice,
                },
              },
            },
          });
        }
      }, 500);
    }
    fetchData();
  }, []);

  return (
    <div>
      <canvas id='myChart'></canvas>
    </div>
  );
}

export default LineGraph;
