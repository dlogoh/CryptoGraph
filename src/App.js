import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import CryptoGraph from './components/CryptoGraph'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

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
          <CryptoGraph id='chart' coins={coinData} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App