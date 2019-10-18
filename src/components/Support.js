import React from 'react';

function sendSupportRequest(event) {
  event.preventDefault();
  console.log('Submitting the email!');
}

export default class Support extends React.Component {
  render() {
    return (
      <div className="main support">
        <h1>SUPPORT</h1>
        <h2>Questions, Comments, Requests?</h2>
        <p>Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris
        molestie elit, et lacinia ipsum quam nec dui.</p>

        <form id="form-id">
          <input type="text" />
          <button id="email-id" onClick={sendSupportRequest}>Submit</button>
        </form>
      </div>
    );
  }
}