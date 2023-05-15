import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCoin,
  setAssets,
  addFavorite,
  removeFavorite,
} from "../features/coinSlice";
import {
  setOpen,
  setStats,
  openFavorites,
  closeFavorites,
} from "../features/SidebarSlice";
import coinIcon from "../img/coin-icon.svg";
import statsIcon from "../img/stats-icon.svg";
import favoriteIcon from "../img/favorite-icon.svg";
import backIcon from "../img/back-icon.svg";
import heartIcon from "../img/heart-icon.svg";
import heartFill from "../img/heart-fill-icon.svg";

import "../styles/Sidebar.css";

const Sidebar = () => {
  const [asset, setAsset] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState();

  const fetchAsset = async () => {
    const response = await fetch("https://api.coincap.io/v2/assets");
    const json = await response.json();
    setAsset(json);
    dispatch(setAssets(json));
  };

  useEffect(() => {
    fetchAsset();
  }, []);

  // Redux
  const open = useSelector((state) => state.sidebar.open);
  const favorites = useSelector((state) => state.coin.favorites);
  const favoritesOpen = useSelector((state) => state.sidebar.favoritesOpen);
  const openSidebar = useSelector((state) => state.sidebar.sidebarClass);

  const dispatch = useDispatch();

  const toggleSidebar = (toggle) => {
    dispatch(setOpen(toggle));
  };

  const toggleStats = (toggle) => {
    dispatch(setStats(toggle));
  };

  const openFavs = () => {
    dispatch(openFavorites());
  };

  const closeFavs = () => {
    dispatch(closeFavorites());
  };

  const handleCoin = (coin) => {
    dispatch(setCoin(coin));
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    const lowercaseQuery = value.toLowerCase();
    const filtered = asset.data.filter((item) =>
      item.name.toLowerCase().includes(lowercaseQuery)
    );
    setFilteredData(filtered);
  };

  const toggleFavorite = (coin) => {
    if (favorites.includes(coin)) {
      dispatch(removeFavorite(coin));
    } else {
      dispatch(addFavorite(coin));
    }
  };

  const handleSubmit = (e) => {
    // useless for now
    e.preventDefault();
    console.log(filteredData);
  };

  return (
    <>
      <div className={`sidebar ${openSidebar}`}>
        <div className='sidebar-container'>
          {!open && (
            <ul>
              <li
                className='sidebar-item'
                onClick={() => {
                  toggleSidebar(true);
                  toggleStats(false);
                }}
              >
                <img src={coinIcon} alt='Coin Icon' />
                Coins
              </li>
              <li className='sidebar-item' onClick={() => toggleStats(true)}>
                <img src={statsIcon} alt='Stats Icon' />
                Stats
              </li>
              <li
                className='sidebar-item'
                onClick={() => {
                  openFavs();
                  toggleSidebar(true);
                }}
              >
                <img src={favoriteIcon} alt='Favorites' />
                Favorites
              </li>
            </ul>
          )}{" "}
          {favoritesOpen === true && (
            <div className='coin-menu'>
              <img
                src={`${backIcon}`}
                alt='Go Back'
                onClick={() => {
                  closeFavs();
                  toggleSidebar(false);
                }}
              />
              {favorites.length === 0 ? (
                <p className='no-favorites'>No favorites yet</p>
              ) : (
                <ul className='coin-list'>
                  {favorites.map((item) => (
                    <li
                      className='sidebar-item sidebar-item-fav'
                      value={item}
                      key={item}
                      onClick={() => handleCoin(item)}
                    >
                      {item}
                      <img
                        src={
                          item === favorites.find((fav) => fav === item)
                            ? `${heartFill}`
                            : `${heartIcon}`
                        }
                        alt='heart'
                        className='heart-icon'
                        onClick={() => toggleFavorite(item)}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}{" "}
          {open && (
            <div className='coin-menu'>
              <img
                src={backIcon}
                alt='Go Back'
                onClick={() => toggleSidebar(false)}
              />
              <form onSubmit={handleSubmit}>
                <input
                  type='text'
                  value={query}
                  onChange={handleChange}
                  placeholder='Search...'
                />
                <button type='submit'>Search</button>
              </form>
              {!filteredData ? (
                <ul className='coin-list'>
                  {asset.data.map((item) => (
                    <li
                      className='sidebar-item sidebar-item-fav'
                      value={item.id}
                      key={item.id}
                      onClick={() => handleCoin(item.id)}
                    >
                      {item.name}
                      <img
                        src={
                          item.id === favorites.find((fav) => fav === item.id)
                            ? `${heartFill}`
                            : `${heartIcon}`
                        }
                        alt='heart'
                        className='heart-icon'
                        onClick={() => toggleFavorite(item.id)}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className='coin-list'>
                  {filteredData.map((item) => (
                    <li
                      className='sidebar-item sidebar-item-fav'
                      value={item.id}
                      key={item.id}
                      onClick={() => handleCoin(item.id)}
                    >
                      {item.name}
                      <img
                        src={
                          item.id === favorites.find((fav) => fav === item.id)
                            ? `${heartFill}`
                            : `${heartIcon}`
                        }
                        alt='heart'
                        className='heart-icon'
                        onClick={() => toggleFavorite(item.id)}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
