import { useState, useEffect } from "react";
import axios from "axios";

const CoinList = () => {
  const [coin, setCoin] = useState([]);

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
      </section>
    </main>
  );
};

export default CoinList;
