import React from 'react';

export default class SubmitQuestion extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>Submit A Question</h1>
        <form>
          <input type="text"/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}