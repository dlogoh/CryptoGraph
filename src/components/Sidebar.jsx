import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCoin } from "../features/coinSlice";
import coinIcon from "../img/coin-icon.svg";
import statsIcon from "../img/stats-icon.svg";
import favoriteIcon from "../img/favorite-icon.svg";
import backIcon from "../img/back-icon.svg";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  // Redux
  const dispatch = useDispatch();
  const coin = useSelector((state) => state.coin.coin);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const handleCoin = (item) => {
    dispatch(setCoin(item));
  };

  return (
    <>
      <div className='sidebar'>
        <div className='sidebar-container'>
          {!open ? (
            <ul>
              <li className='sidebar-item' onClick={toggleSidebar}>
                <img src={coinIcon} alt='Coin Icon' />
                Coins
              </li>
              <li className='sidebar-item'>
                <img src={statsIcon} alt='Stats Icon' />
                Stats
              </li>
              <li className='sidebar-item'>
                <img src={favoriteIcon} alt='Favorites' />
                Favorites
              </li>
            </ul>
          ) : (
            <div className='coin-menu'>
              <img src={backIcon} alt='Go Back' onClick={toggleSidebar} />
              <ul className='coin-list'>
                <li
                  className='sidebar-item'
                  onClick={() => handleCoin("bitcoin")}
                >
                  Bitcoin
                </li>
                <li
                  className='sidebar-item'
                  onClick={() => handleCoin("ethereum")}
                >
                  Ethereum
                </li>
                <li
                  className='sidebar-item'
                  onClick={() => handleCoin("tether")}
                >
                  Tether
                </li>
                <li
                  className='sidebar-item'
                  onClick={() => handleCoin("binance-coin")}
                >
                  Binance-Coin
                </li>
                <li
                  className='sidebar-item'
                  onClick={() => handleCoin("usd-coin")}
                >
                  USD Coin
                </li>
                <li className='sidebar-item' onClick={() => handleCoin("xrp")}>
                  XRP
                </li>
                <li
                  className='sidebar-item'
                  onClick={() => handleCoin("cardano")}
                >
                  Cardano
                </li>
                <li
                  className='sidebar-item'
                  onClick={() => handleCoin("steth")}
                >
                  Steth
                </li>
                <li
                  className='sidebar-item'
                  onClick={() => handleCoin("dogecoin")}
                >
                  Dogecoin
                </li>
                <li
                  className='sidebar-item'
                  onClick={() => handleCoin("polygon")}
                >
                  Polygon
                </li>
                <li
                  className='sidebar-item'
                  onClick={() => handleCoin("solana")}
                >
                  Solana
                </li>
                <li
                  className='sidebar-item'
                  onClick={() => handleCoin("polkadot")}
                >
                  Polkadot
                </li>
                <li
                  className='sidebar-item'
                  onClick={() => handleCoin("litecoin")}
                >
                  Litecoin
                </li>
                <li
                  className='sidebar-item'
                  onClick={() => handleCoin("shiba-inu")}
                >
                  Shiba Inu
                </li>
                <li className='sidebar-item' onClick={() => handleCoin("tron")}>
                  Tron
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
