import React from 'react';
import { Link } from "@reach/router";

function Home(props) {
  return(
    <div className="main home-page">
      <h1 className="logo">LQ QA Logo</h1>
      <Link to="submit-question">
        <h2>Submit A Question</h2>
      </Link>
      <Link to="support">
        <h2>Support</h2>
      </Link>
      <Link to="privacy-policy">
        <h2>Privacy Policy</h2>
      </Link>
      <Link to="terms-of-service">
        <h2>Terms of Service</h2>
      </Link>
    </div>
  );
};

export default Home;