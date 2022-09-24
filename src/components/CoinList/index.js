import React from "react";
import { Link } from "react-router-dom";

const CoinList = ({ item }) => {
  return (
    <Link to={item.id}>
      <h2>{item.id}</h2>
    </Link>
  );
};

export default CoinList;
