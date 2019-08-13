import React from 'react';
import { Link } from '@reach/router';
import './Header.scss';

function Header(props) {
  return(
    <header>
      <div className="search-box">
        SEARCH BOX FIELD
      </div>
      <div className="hamburger">
        <Link to="/menu">Menu</Link>
      </div>
    </header>
  );
};

export default Header;