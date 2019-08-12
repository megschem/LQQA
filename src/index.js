import React from 'react';
import ReactDOM from 'react-dom';
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

class App extends React.Component {
  render() {
    return(
      <div className="container home-page">
        <Header />
        <Home />
        {/* <Search /> */}
        {/* <ResultsList /> */}
        {/* <Result /> */}
        {/* <SubmitQuestion /> */}
        {/* <About /> */}
        {/* <Terms /> */}
        {/* <Privacy /> */}
        {/* <Support /> */}
      </div>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App/>, mountNode);
