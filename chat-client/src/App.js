import React from 'react';
import Header from './Header';
import Messages from './Messages';
import { connect, sendMessage } from './api/index.js';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props)
    connect();

    this.state = {
      messages: []
    }
  };

  componentDidMount() {
    connect((msg) => {
      console.log("New Message...");
      this.setState(prevState => ({
        messages: [...this.state.messages, msg]
      }), console.log(this.state))
    });
  };

  handleSubmission() {
    console.log("Sending Message from App.js");
    sendMessage("This is the message that I sent.")
  }

  render() {
    return (
      <div className="App">
        <Header />
        <button onClick={this.handleSubmission}>Send</button>
        <Messages messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
