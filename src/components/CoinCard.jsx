import React from "react";

function CoinCard({ coin, setSelectedCoin }) {
  const handleClick = (e) => {
    setSelectedCoin(e.target.value);
  };

  return (
    <li>
      <div className="coin-buttons">
        <img src={`${coin.image.thumb}`} />
        <input
          type="button"
          id={coin.name}
          value={coin.id}
          name="coin"
          onClick={handleClick}
        />
      </div>
    </li>
  );
}

export default CoinCard;
