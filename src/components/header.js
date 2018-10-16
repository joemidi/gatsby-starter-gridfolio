import React from 'react';
import Link from 'gatsby-link';

import './header.scss';
import logo from '../assets/logo.svg';
import searchIcon from '../assets/search-icon.svg';
import closeIcon from '../assets/close-icon.svg';

const Header = () => (
  <div className="header">
    <Link className="brand" to="/">
      <img src={logo} alt="Jellyfish Creative" />
    </Link>
    <div className="search">
      <input type="text" placeholder="Search" />
      <div className="icon icon-search">
        <img src={searchIcon} alt="Search" />
      </div>
      <div className="icon icon-close">
        <img src={closeIcon} alt="Close Search" />
      </div>
    </div>
  </div>
);

export default Header;
