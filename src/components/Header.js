import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header(props) {
  return(
    <header>
      <div className="search-box">
        SEARCH BOX FIELD
      </div>
      <Link to="/menu/" className="hamburger">Menu</Link>
    </header>
  );
};

export default Header;