import React from "react";

const CoinNews = ({ news }) => {
  return (
    <a
      href={news?.news_url}
      target="_blank"
      rel="noopener noreferrer"
      className="news"
    >
      <div className="news">
        <div className="news__container">
          <div className="news__container__image">
            <img src={news?.image_url} alt="" />
          </div>
          <div className="news__container__info">
            <div className="news__container__title">
              <h3>{news?.title}</h3>
            </div>
            <div className="news__container__text">
              <p>{news?.text}</p>
            </div>
            <div className="news__container__source">
              <div className="news__container__tickers">
                <p>{news?.tickers.toLocaleString()}</p>
              </div>
              <div className="news__container__name">
                <p>{news?.source_name}</p>
              </div>
              <span>{news?.date}</span>
              <div className="news__container__sentiment">
                <p>{news?.sentiment}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CoinNews;
