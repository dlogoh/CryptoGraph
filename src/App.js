import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import CryptoGraph from './components/CryptoGraph'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
  const [coinData, setCoinData] = React.useState([])
  const [selectedCoin, setSelectedCoin] = React.useState('Bitcoin')
  const [pastValue, setPastValue] = React.useState([])

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins')
      .then(res => res.json())
      .then(data => setCoinData(data))
  }, [])

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${selectedCoin.toLowerCase()}/market_chart?vs_currency=usd&days=10&interval=daily`)
      .then(res => res.json())
      .then(data => setPastValue(data))
  }, [selectedCoin])

  return (
    <div>
      <Navbar />
      <div className="main-flex">
        <Sidebar coins={coinData} setSelectedCoin={setSelectedCoin} />
        <div className="chart-container">
          <CryptoGraph id='chart' coins={coinData} pastValue={pastValue} selectedCoin={selectedCoin} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App