import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="logo" alt="LQ Q&A logo">
          <h1>LQ Q&A</h1>
        </div>
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
      </div>
    );
  }
}