import React from "react";
import { Link } from "react-router-dom";
import Logo from "assets/images/logo.webp";
import { useSelector } from "react-redux";

const Navbar = () => {
  const favorites = useSelector((state) => state.favorites.coinItems);

  const links = [
    {
      id: 1,
      name: "Cryptocurrencies",
      path: "/",
    },

    {
      id: 2,
      name: "Exchanges",
      path: "/",
    },

    {
      id: 3,
      name: "NFT",
      path: "/",
    },
    {
      id: 4,
      name: "Learn Crypto",
      path: "/",
    },
    {
      id: 5,
      name: "Products",
      path: "/",
    },
  ];

  return (
    <header className="header">
      <div className="header__container">
        <nav className="nav">
          <div className="nav__logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <ul className="nav__list">
            {links.map((link) => (
              <li key={link.id} className="nav__link">
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
            <li className="nav__link--favorites">
              <Link to="/favorites">Favorites: {favorites.length}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
