import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCoin } from "../features/coinSlice";
import coinIcon from "../img/coin-icon.svg";
import statsIcon from "../img/stats-icon.svg";
import favoriteIcon from "../img/favorite-icon.svg";
import backIcon from "../img/back-icon.svg";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [asset, setAsset] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState();

  const fetchAsset = async () => {
    const response = await fetch("https://api.coincap.io/v2/assets");
    const json = await response.json();
    setAsset(json);
  };

  useEffect(() => {
    fetchAsset();
  }, []);

  // console.log(asset);

  // Redux
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setOpen(!open);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting search query:", query);
    console.log(filteredData);
    // Send search query to the server using fetch or another library
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
                      className='sidebar-item'
                      value={item.id}
                      key={item.id}
                      onClick={(e) => handleCoin(item.id)}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className='coin-list'>
                  {filteredData.map((item) => (
                    <li
                      className='sidebar-item'
                      value={item.id}
                      key={item.id}
                      onClick={(e) => handleCoin(item.id)}
                    >
                      {item.name}
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
