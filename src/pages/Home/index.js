import React from "react";
import { CoinList, Navbar } from "components/";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <CoinList />
    </React.Fragment>
  );
};

export default Home;
