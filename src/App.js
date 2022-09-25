import { Navbar } from "components";
import CoinDetails from "./pages/CoinDetails";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
