import React from 'react'
import CoinCard from './CoinCard'

function Sidebar({ coins }) {
  const coinNames = coins.slice(0, 20).map((coin) => {
    return (
      <CoinCard 
        key={coin.name}
        coin={coin}
      />
    )
  })



  return (
    <div className='sidebar'>
      <div className="searchbar">Search here</div>
      <div className="coins">
        <ul>
          {coinNames}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar