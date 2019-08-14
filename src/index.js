import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.scss';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Privacy from './components/Privacy';
import Result from './components/Result';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import SubmitQuestion from './components/SubmitQuestion';
import Support from './components/Support';
import Terms from './components/Terms';

function App() {
    return(
      <Router>
        <div className="container home-page">
          <Header />

          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/menu/" component={Menu} />
          <Route path="/privacy-policy/" component={Privacy} />
          <Route path="/result/" component={Result} />
          <Route path="/search-results/" component={SearchResults} />
          <Route path="/search/" component={Search} />
          <Route path="/submit-question/" component={SubmitQuestion} />
          <Route path="/support/" component={Support} />
          <Route path="/terms-of-service/" component={Terms} />
        </div>
      </Router>
    );
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App/>, mountNode);
