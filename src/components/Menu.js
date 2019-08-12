import React from 'react';
import { Link } from "@reach/router";

function Menu(props) {
  return(
    <main>
      <h1>MENU</h1>
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <Link to="/search">
        <h2>Search</h2>
      </Link>
      <Link to="/submit-question">
        <h2>Submit A Question</h2>
      </Link>
      <Link to="/support">
        <h2>Support</h2>
      </Link>
      <Link to="/privacy-policy">
        <h2>Privacy Policy</h2>
      </Link>
      <Link to="/terms-of-service">
        <h2>Terms of Service</h2>
      </Link>
    </main>
  );
};

export default Menu;

