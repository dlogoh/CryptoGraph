import "../styles/CoinGraph.css";
import LineGraph from "./LineGraph";

const CoinGraph = () => {
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
            <h3>{`${day}, ${date.getDate()} ${month}`}</h3>
            <h2 className='graph-title'>Bitcoin</h2>
          </div>
          <LineGraph />
        </div>
      </section>
    </>
  );
};

export default CoinGraph;
