import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return(
      <div className="stuff">
        <Header something="Pudge" message="I love lamp" />
        Hello World
      </div>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App/>, mountNode);
