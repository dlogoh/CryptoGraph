import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);




function CryptoGraph({ coins }) {
  const defaultGraphTitle = coins.slice(0, 1).map(coin => {
    return coin.name
  })

  const options = {
    responsive: true,
    maintainAspectRation: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: defaultGraphTitle,
      },
    },
  };

  const thirtyDaysAgo = new Date(new Date().setDate(new Date().getDate() - 30));
  const pastMonth = 
    thirtyDaysAgo.getMonth() > 1 ? thirtyDaysAgo.getMonth() + 1 :
    thirtyDaysAgo.getMonth() === 0 ? thirtyDaysAgo.getMonth() + 12 : thirtyDaysAgo.getMonth()
  const pastDay = thirtyDaysAgo.getDate()
  const pastYear = thirtyDaysAgo.getFullYear()

  const currentDate = new Date()
  const month = currentDate.getMonth()
  const day = currentDate.getDate()
  const year = currentDate.getFullYear()
  const labels = []

    console.log(pastMonth);

  const data = {
    labels,
    datasets: [
      {
        label: 'Daily Price',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return (
    <Line options={options} data={data}/>
    
  )
}

export default CryptoGraph