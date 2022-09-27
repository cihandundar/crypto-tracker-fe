import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HistoryChart, CoinNews } from "components";

const CoinDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  const [keyword, setKeyword] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => {
        setStatus(response);
        setCoin(response.data);
      });
  }, [id]);

  useEffect(() => {
    if (status.status === 200) {
      axios
        .get(
          `https://cryptonews-api.com/api/v1?tickers=${coin?.symbol}&items=50&page=1&token=5lho08jskwfqyay6sywiorcrigdakrlemtjt64nf`
        )
        .then((response) => setKeyword(response.data.data.slice(0, 6)));
    }
  }, [coin, status]);

  const detailsList = [
    {
      id: 13,
      currency: "24h",
    },
    {
      id: 14,
      currency: "7d",
    },
    {
      id: 15,
      currency: "30d",
    },
    {
      id: 16,
      currency: "1y",
    },
  ];

  return (
    <main>
      <div className="details">
        <div className="details__container">
          <div className="details__rank">
            <span>Rank #{coin?.market_data?.market_cap_rank}</span>
          </div>
          <div className="details__name">
            <img src={coin?.image?.small} alt={coin?.name} />
            <h2>{coin?.name}</h2>
            <span>{coin?.symbol}</span>
          </div>
          <ul className="details__list details__list--lower ">
            <li className="details__list--item">
              <h4>Low 24h</h4>
              <p className={"details__list__item details__list__item--down"}>
                {coin?.market_data?.low_24h.usd?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </li>

            <li className="details__list--item">
              <h4>High 24h</h4>
              <p className="details__list__item details__list__item--up">
                {coin?.market_data?.high_24h.usd?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </li>
          </ul>
          <div className="details__content">
            <ul className="details__list">
              {detailsList.map((info) => (
                <li key={info.id} className="details__list__item">
                  {info.currency}
                </li>
              ))}
            </ul>
            <ul className="details__list details__list--lower ">
              <li
                className={
                  coin?.market_data?.price_change_percentage_24h < 0
                    ? `details__list__item details__list__item--down `
                    : `details__list__item details__list__item--up`
                }
              >
                {coin?.market_data?.price_change_percentage_24h?.toFixed(2)}%
              </li>
              <li
                className={
                  coin?.market_data?.price_change_percentage_7d < 0
                    ? `details__list__item details__list__item--down `
                    : `details__list__item details__list__item--up`
                }
              >
                {coin?.market_data?.price_change_percentage_7d?.toFixed(2)}%
              </li>
              <li
                className={
                  coin?.market_data?.price_change_percentage_30d < 0
                    ? `details__list__item details__list__item--down`
                    : `details__list__item details__list__item--up`
                }
              >
                {coin?.market_data?.price_change_percentage_30d?.toFixed(2)}%
              </li>
              <li
                className={
                  coin?.market_data?.price_change_percentage_1y < 0
                    ? `details__list__item details__list__item--down`
                    : `details__list__item details__list__item--up`
                }
              >
                {coin?.market_data?.price_change_percentage_1y?.toFixed(2)}%
              </li>
            </ul>
          </div>
          <article className="details__info">
            <p dangerouslySetInnerHTML={{ __html: coin?.description?.en }}></p>
          </article>
          <div className="details__chart">
            <HistoryChart />
          </div>
          <div className="details__news">
            {keyword?.map((news) => (
              <CoinNews key={news?.id} news={news} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoinDetails;
