import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
const CoinList = ({ item, addFavorites }) => {
  return (
    <section style={{ display: "flex", alignItems: "center", width: "100%" }}>
      <button
        style={{ all: "unset", display: "flex" }}
        onClick={() => addFavorites(item?.id)}
      >
        <AiOutlineStar />
      </button>
      <Link
        style={{ display: "flex", width: "100%" }}
        key={item.id}
        to={`/coin/${item.id}`}
      >
        <div className="section">
          <div className="section__left">
            <p>{item?.market_cap_rank}</p>
            <div className="section__left__title">
              <img src={item?.image} alt="" />
              <h4>{item?.id}</h4>
              <span>{item?.symbol}</span>
            </div>
          </div>
          <ul className="section__list">
            <li className="section__list__item">
              {item.current_price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </li>
            <li
              className={
                item?.price_change_percentage_24h < 0
                  ? `section__list__item section__list__item--down`
                  : `section__list__item section__list__item--up`
              }
            >
              {item?.price_change_percentage_24h?.toFixed(2)}%
            </li>
            <li className="section__list__item">
              {item.total_volume.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              })}
            </li>
            <li className="section__list__item">
              {item.market_cap.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              })}
            </li>
          </ul>
        </div>
      </Link>
    </section>
  );
};

export default CoinList;
