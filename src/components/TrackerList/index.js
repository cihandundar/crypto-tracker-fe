import CoinList from "components/CoinList";
import React from "react";

const TrackerList = ({ favorites, titleList }) => {
  return (
    <section className="tracker__list">
      {favorites.length > 0 ? (
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
      ) : (
        <h3>Tracker List Not Found</h3>
      )}
      {favorites?.map((item) => (
        <CoinList key={item.id} item={item} />
      ))}
    </section>
  );
};

export default TrackerList;
