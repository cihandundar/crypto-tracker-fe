import { useState, useEffect } from "react";
import axios from "axios";

const CoinList = () => {
  const [coin, setCoin] = useState([]);

  const titleList = [
    {
      id: 7,
      details: "Price",
    },
    {
      id: 9,
      details: "24h",
    },
    {
      id: 10,
      details: "24h Volume",
    },
    {
      id: 11,
      details: "Mkt Cap",
    },
  ];

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((response) => setCoin(response.data));
  }, []);

  return (
    <main className="main">
      <section className="section">
        <div className="section__container">
          <div className="section__title">
            <h2>Cryptocurrency Prices by Market Cap</h2>
            <p>
              The global cryptocurrency market cap today is $1.08 Trillion, a
              5.6% change in the last 24 hours.
            </p>
          </div>
        </div>
        <header className="section__header">
          <div className="section__header__left">
            <span>#</span>
            <p>Coin</p>
          </div>
          <ul className="section__header__list">
            {titleList.map((list) => (
              <li key={list.id} className="section__header__item">
                {list.details}
              </li>
            ))}
          </ul>
        </header>
      </section>
    </main>
  );
};

export default CoinList;
