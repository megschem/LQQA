import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from "@reach/router";
import './index.scss';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import SubmitQuestion from './components/SubmitQuestion';
import Search from './components/Search';
import ResultsList from './components/ResultsList';
import Result from './components/Result';
import About from './components/About';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Support from './components/Support';

const App = () => {
  return(
    <div className="container">
      <Header />
      <Router>
        <Home path="/" />
        <Menu path="/menu" />
        <Search path="/search" >
          <ResultsList path="/search-results" />
          <Result path="/result" />
        </Search>
        <SubmitQuestion path="/submit-question" />
        <About path="/about" />
        <Terms path="/terms-of-service" />
        <Privacy path="/privacy-policy" />
        <Support path="/support" />
      </Router>
    </div>
  );
};

const mountNode = document.getElementById('app');
ReactDOM.render(<App/>, mountNode);
