import React from 'react';
import './Header.scss';

function Header(props) {
  return(
    <header>
      <div className="logo" alt="LQ Q&A logo">
        <h1>LQ Q&A</h1>
      </div>
      <div className="hamburger">X</div>
    </header>
  );
};

export default Header;