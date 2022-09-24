import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
const CoinList = ({ item }) => {
  return (
    <Link to={item?.id}>
      <div className="coinlist">
        <div className="coinlist__left">
          <AiOutlineStar />
          <p>{item?.market_cap_rank}</p>
          <div className="coinlist__left__title">
            <img src={item?.image} alt="" />
            <h4>{item?.id}</h4>
            <span>{item?.symbol}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CoinList;
