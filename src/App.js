import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import CryptoGraph from './components/CryptoGraph'
import Sidebar from './components/Sidebar'

function App() {
  const [coinData, setCoinData] = React.useState([])
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins')
      .then(res => res.json())
      .then(data => setCoinData(data))
    console.log(coinData)
  }, [])



  return (
    <div>
      <Navbar />
      <div className="main-flex">
        <Sidebar coins={coinData} />
        <div className="chart-container">
          <CryptoGraph id='chart' />
        </div>
      </div>
    </div>
  )
}

export default App