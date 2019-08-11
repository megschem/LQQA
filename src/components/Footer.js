import React from 'react';
import './Footer.scss';

function Footer(props) {
  return(
    <div className="footer">Greeting: {props.name}</div>
  );
};

export default Footer;