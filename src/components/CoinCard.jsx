import React from 'react'

function CoinCard({ coin }) {
  return (
    <li>
      <div className='coin-card-container'>
        <div className='coin-card-img'>
          <img src={`${coin.image.thumb}`}/>
        </div>
        <div className='coin-name'>
        {coin.name}
        </div>
      </div>
    </li>
  )
}

export default CoinCard