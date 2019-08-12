import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.scss';
import Header from './components/Header';
import Home from './components/Home';
import SubmitQuestion from './components/SubmitQuestion';
import Search from './components/Search';
import ResultsList from './components/ResultsList';
import Result from './components/Result';
import About from './components/About';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Support from './components/Support';

function App() {
    return(
      <Router>
        <div className="container home-page">
          <Header />

          <Route path="/" exact component={Home} />
          <Route path="/search/" component={Search} />
          <Route path="/search-results/" component={ResultsList} />
          <Route path="/result/" component={Result} />
          <Route path="/submit-question/" component={SubmitQuestion} />
          <Route path="/about/" component={About} />
          <Route path="/terms-of-service/" component={Terms} />
          <Route path="/privacy-policy/" component={Privacy} />
          <Route path="/support/" component={Support} />
        </div>
      </Router>
    );
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App/>, mountNode);
