import React from "react";
import { Link } from "react-router-dom";

const CoinList = ({ item }) => {
  return (
    <Link to={item.id}>
      <div className="coinlist">
        <h3>{item.id}</h3>
      </div>
    </Link>
  );
};

export default CoinList;
