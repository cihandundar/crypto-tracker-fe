import { Navbar } from "components";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, CoinDetails } from "./pages";
import FavoritesPage from "pages/FavoritesPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
