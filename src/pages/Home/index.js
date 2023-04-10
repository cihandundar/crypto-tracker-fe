import React from "react";
import { CoinList, Filter } from "components/";

const Home = () => {
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

  return (
    <main className="content">
      <div className="content__container">
        <div className="content__info">
          <div>
            <h2>Cryptocurrency Prices by Market Cap</h2>
            <p>
              The global cryptocurrency market cap today is $1.08 Trillion, a
              5.6% change in the last 24 hours.
            </p>
          </div>
          <div className="input">
            <Filter />
          </div>
        </div>

        <div className="content__title">
          <div className="content__title__left">
            <span>#</span>
            <p>Coin</p>
          </div>
          <ul className="content__title__list">
            {titleList.map((list) => (
              <li key={list.id} className="content__title__item">
                {list.details}
              </li>
            ))}
          </ul>
        </div>
        <div className="content__scroll">
          <CoinList />
        </div>
      </div>
    </main>
  );
};

export default Home;
