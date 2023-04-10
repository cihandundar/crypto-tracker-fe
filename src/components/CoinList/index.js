import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoin } from "redux/coinSlice";
import { add } from "redux/favoritesSlice";
const CoinList = () => {
  const items = useSelector((state) => state?.coin?.items);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoin());
  }, [dispatch]);
  const handleAdd = (item) => {
    dispatch(add(item));
  };
  console.log(add);
  return (
    <section>
      {items?.map((item) => (
        <div key={item?.id} className="wrapper">
          <button
            onClick={() => handleAdd(item)}
            style={{ all: "unset", display: "flex" }}
          >
            <AiOutlineStar />
          </button>

          <Link
            style={{ display: "flex", width: "100%" }}
            to={`/coin/${item?.id}`}
          >
            <div className="section">
              <div className="section__left">
                <p>{item?.market_cap_rank}</p>
                <div className="section__left__title">
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
        </div>
      ))}
    </section>
  );
};

export default CoinList;
