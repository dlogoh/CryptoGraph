import { useSelector, useDispatch } from "react-redux";
import { setChartInterval } from "../features/chartIntervalSlice";
import LineGraph from "./LineGraph";
import downIcon from "../img/down-icon.svg";
import upIcon from "../img/down-g-icon.svg";

import "../styles/CoinGraph.css";

const CoinGraph = () => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleChange = (e) => {
    dispatch(setChartInterval(e.target.value));
  };

  // Redux
  const dispatch = useDispatch();
  const coin = useSelector((state) => state.coin.coin);
  const assets = useSelector((state) => state.coin.assets);
  const interval = useSelector((state) => state.chartInterval.chartInterval);
  const stats = useSelector((state) => state.sidebar.stats);

  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = new Date();
  let day = weekday[date.getDay()];
  let month = months[date.getMonth()];

  function formatCurrency(number, isFormatted = true) {
    if (!isFormatted) return `$${number.toFixed(7)}`;
    const rounded = number.toFixed(2);
    const formatted = rounded.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const result = "$" + formatted;

    return result;
  }

  function formatNumber(number) {
    const trillion = 1000000000000;
    const billion = 1000000000;
    const million = 1000000;
    const thousand = 1000;

    if (number > trillion) {
      return `$${(number / trillion).toFixed(2)}T`;
    }

    if (number > billion) {
      return `$${(number / billion).toFixed(2)}B`;
    }
    if (number > million) {
      return `$${(number / million).toFixed(2)}M`;
    }
    if (number > thousand) {
      return `$${(number / thousand).toFixed(2)}K`;
    }
  }

  function formatPercent(number) {
    const roundedNumber = Number(number).toFixed(2);
    return `${roundedNumber}%`;
  }

  return (
    <>
      {!stats ? (
        <section className='coin-graph'>
          <div className='container'>
            <div className='graph-header'>
              <div className='graph-header-left'>
                <h3>{`${day}, ${date.getDate()} ${month}`}</h3>
                <h2 className='graph-title'>{capitalizeFirstLetter(coin)}</h2>
              </div>
              <div className='graph-header-right'>
                <select value={interval} onChange={handleChange}>
                  <option value=''>Select Interval</option>
                  <option value='m1'>1m</option>
                  <option value='m5'>5m</option>
                  <option value='m15'>15m</option>
                  <option value='m30'>30m</option>
                  <option value='h1'>1hr</option>
                  <option value='h2'>2hr</option>
                  <option value='h6'>6hr</option>
                  <option value='h12'>12hr</option>
                  <option value='d1'>Daily</option>
                </select>
              </div>
            </div>
            <div className='yLabel'>Price in USD</div>
            <LineGraph />
            <div className='xLabel'>Time / Date</div>
          </div>
        </section>
      ) : (
        <div className='coin-stats'>
          <div className='stats-header'>
            <div className='stats-rank'>
              <h3>Rank</h3>
              <h3>Name</h3>
            </div>
            <div className='stats-info'>
              <h3>Price</h3>
              <h3>Market Cap</h3>
              <h3>Volume</h3>
              <h3>Supply</h3>
              <h3>Change (24hr)</h3>
            </div>
          </div>
          <div className='stats-list'>
            {assets.data.map((asset) => (
              <div className='stats-item' key={asset.id}>
                <div className='stats-rank-asset'>
                  <h4>{asset.rank}</h4>
                  <h3>{asset.name}</h3>
                  {asset.changePercent24Hr < 0 && (
                    <img src={`${downIcon}`} alt='down' className='down-icon' />
                  )}
                  {asset.changePercent24Hr > 0 && (
                    <img src={`${upIcon}`} alt='up' className='up-icon' />
                  )}
                </div>
                <div className='stats-info-asset stats-info-container'>
                  <h3>
                    {asset.priceUsd > 1 &&
                      formatCurrency(parseFloat(asset.priceUsd))}
                    {asset.priceUsd < 1 &&
                      formatCurrency(parseFloat(asset.priceUsd), false)}
                  </h3>
                  <h3>{formatNumber(asset.marketCapUsd)}</h3>
                  <h3>{formatNumber(asset.volumeUsd24Hr)}</h3>
                  <h3>{formatNumber(asset.supply)}</h3>
                  <h3>{formatPercent(asset.changePercent24Hr)}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CoinGraph;
