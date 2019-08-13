import React from 'react';

function SubmitQuestion(props) {
  return(
    <div className="main">
      <h1>Submit A Question</h1>
      <form>
        <input type="text"/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SubmitQuestion;