import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => setCoin(response.data));
  }, [id]);

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
        </div>
      </div>
    </main>
  );
};

export default CoinDetails;
