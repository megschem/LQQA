import React from 'react';
import './Header.scss';

function Header(props) {
  console.log("props:", props);
  return(
    <div className="header">Message: {props.something}</div>
  );
};

export default Header;