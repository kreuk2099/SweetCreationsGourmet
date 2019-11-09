import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.scss";
import "../assets/styles/CoreStyle.scss";
import {
  FavoriteBorder,
  PermIdentity,
  ShoppingBasketOutlined,
} from "@material-ui/icons";
import logo from "../assets/static/images/Logo_SweetCreations.png";
import SearchInput from "./Search";

const Header = () => (
  <header className="header_area">
    <div className="classy-nav-container d-flex align-items-center justify-content-between light left breakpoint-on">
      <nav className="classy-navbar" id="essenceNav">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Sweet Creations" />
        </Link>
        <Link to="/products">Productos</Link>
      </nav>

      <SearchInput />

      <div className="header-meta d-flex clearfix justify-content-end">
        <div className="favourite-area">
          <Link to="/register">
            <FavoriteBorder />
          </Link>
        </div>
        <div className="user-login-info">
          <Link to="/login">
            <PermIdentity />
          </Link>
        </div>
        <div className="cart-area">
          <Link to="/cart">
            <ShoppingBasketOutlined />
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;