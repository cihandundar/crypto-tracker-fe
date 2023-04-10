import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { HistoryChart } from "components";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoinDetails } from "redux/coinSlice";

const CoinDetails = () => {
  const details = useSelector((state) => state?.coin?.details);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoinDetails(id));
  }, [dispatch, id]);

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
            <span>Rank #{details?.market_data?.market_cap_rank}</span>
          </div>
          <div className="details__name">
            <h2>{details?.name}</h2>
            <span>{details?.symbol}</span>
          </div>
          <ul className="details__list details__list--lower ">
            <li className="details__list--item">
              <h4>Low 24h</h4>
              <p className={"details__list__item details__list__item--down"}>
                {details?.market_data?.low_24h.usd?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </li>

            <li className="details__list--item">
              <h4>High 24h</h4>
              <p className="details__list__item details__list__item--up">
                {details?.market_data?.high_24h.usd?.toLocaleString("en-US", {
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
                  details?.market_data?.price_change_percentage_24h < 0
                    ? `details__list__item details__list__item--down `
                    : `details__list__item details__list__item--up`
                }
              >
                {details?.market_data?.price_change_percentage_24h?.toFixed(2)}%
              </li>
              <li
                className={
                  details?.market_data?.price_change_percentage_7d < 0
                    ? `details__list__item details__list__item--down `
                    : `details__list__item details__list__item--up`
                }
              >
                {details?.market_data?.price_change_percentage_7d?.toFixed(2)}%
              </li>
              <li
                className={
                  details?.market_data?.price_change_percentage_30d < 0
                    ? `details__list__item details__list__item--down`
                    : `details__list__item details__list__item--up`
                }
              >
                {details?.market_data?.price_change_percentage_30d?.toFixed(2)}%
              </li>
              <li
                className={
                  details?.market_data?.price_change_percentage_1y < 0
                    ? `details__list__item details__list__item--down`
                    : `details__list__item details__list__item--up`
                }
              >
                {details?.market_data?.price_change_percentage_1y?.toFixed(2)}%
              </li>
            </ul>
          </div>
          <article className="details__info">
            <p
              dangerouslySetInnerHTML={{ __html: details?.description?.en }}
            ></p>
          </article>
          <div className="details__chart">
            <HistoryChart />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoinDetails;
