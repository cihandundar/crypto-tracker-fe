import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "redux/favoritesSlice";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const items = useSelector((state) => state?.favorites);

  const dispatch = useDispatch();
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Tracker List
      </h2>
      {items?.coinItems?.map((favorites) => (
        <div key={favorites?.id} className="wrapper">
          <button
            className="remove"
            onClick={() => dispatch(remove(favorites))}
          >
            <ImCross />
          </button>
          <Link
            style={{ display: "flex", width: "100%" }}
            to={`/coin/${favorites?.id}`}
          >
            <div className="section">
              <div className="section__left">
                <p>{favorites?.market_cap_rank}</p>
                <div className="section__left__title">
                  <h4>{favorites?.id}</h4>
                  <span>{favorites?.symbol}</span>
                </div>
              </div>
              <ul className="section__list">
                <li className="section__list__item">
                  {favorites.current_price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </li>
                <li
                  className={
                    favorites?.price_change_percentage_24h < 0
                      ? `section__list__item section__list__item--down`
                      : `section__list__item section__list__item--up`
                  }
                >
                  {favorites?.price_change_percentage_24h?.toFixed(2)}%
                </li>
                <li className="section__list__item">
                  {favorites.total_volume.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  })}
                </li>
                <li className="section__list__item">
                  {favorites.market_cap.toLocaleString("en-US", {
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
    </div>
  );
};

export default FavoritesPage;
