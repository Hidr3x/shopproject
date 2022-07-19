import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
      <div className={style.div_header}>
        <div className={style.item} id={style.firstlink}>
          <NavLink
            to='/shop'
            className={(Link) => (Link.isActive ? style.active : style.active)}
          >
            Shop
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink
            to="/shopping-cart"
            className={(Link) => (Link.isActive ? style.active : style.item)}
          >
            Shopping Cart
          </NavLink>
        </div>
      </div>
  );
}

export default Header;
