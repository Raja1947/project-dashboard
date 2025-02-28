import React, { useState, useEffect } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { HiMenuAlt2 } from "react-icons/hi";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar({setSearchTerm}) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <nav className={` $style.dark_nav}`}>
        <div>
          <NavLink to="" onClick={() => scrollTo(0, 0)} className={style.logo}>
            {" "}
            <BiSolidShoppingBagAlt /> <h1>e Shop</h1>
          </NavLink>
        </div>

        <ul className={mobileMenu ? "" : style.hide_mobile_menu}>
          <li>
            <NavLink to="" onClick={() => scrollTo(0, 0)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="about" onClick={() => scrollTo(0, 0)}>
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink to="contact" onClick={() => scrollTo(0, 0)}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <div className={style.search}>
              <input
                type="text"
                placeholder="Search here..."
                onChange={handleChange}
              />
              <IoMdSearch className={style.searchIcon} />
            </div>
          </li>
          <li>
            <NavLink>
              <IoPersonOutline className={style.icon} />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={style.cart}
              onClick={() => scrollTo(0, 0)}
            >
              <MdOutlineShoppingCart className={style.icon} />
            </NavLink>
          </li>
        </ul>
        <span className={style.menu_icon} onClick={toggleMenu}>
          <HiMenuAlt2 />
        </span>
      </nav>
    </div>
  );
}

export default Navbar;
