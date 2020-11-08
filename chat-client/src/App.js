import React from 'react';
import Header from './Header';
import { connect, sendMessage } from './api/index.js';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props)
    
    connect();
  }

  handleSubmission() {
    console.log("Sending Message from App.js");
    sendMessage("This the message that I sent.")
  }

  render() {
    return (
      <div className="App">
        <Header />
        <button onClick={this.handleSubmission}>Send</button>
      </div>
    );
  }
}

export default App;
