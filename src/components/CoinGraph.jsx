import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setChartInterval } from "../features/chartIntervalSlice";
import LineGraph from "./LineGraph";
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
  const interval = useSelector((state) => state.chartInterval.chartInterval);

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

  return (
    <>
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
          <div className='xLabel'>Time</div>
        </div>
      </section>
    </>
  );
};

export default CoinGraph;
