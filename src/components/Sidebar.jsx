import "../styles/Sidebar.css";
import coinIcon from "../img/coin-icon.svg";
import statsIcon from "../img/stats-icon.svg";
import favoriteIcon from "../img/favorite-icon.svg";

const Sidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <div className='sidebar-container'>
          <ul>
            <li className='sidebar-item'>
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
        </div>
      </div>
    </>
  );
};

export default Sidebar;
