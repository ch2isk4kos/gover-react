import React from 'react';
import Header from './Header';
import ChatRoom from './ChatRoom';
import MessageForm from './MessageForm';
import { connect, sendMessage } from './api/index.js';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props)
    // connect();

    this.state = {
      messages: [],
    }
  };

  componentDidMount() {    
    connect((msg) => {
      console.log("New Message...");
      this.setState(prevState => ({
        messages: [...this.state.messages, msg]
      }))
    });
  };

  handleSubmission = (msg) => {
      console.log("Sending Message from App.js");
      console.log("handleSub event: ")
      this.setState(prevState => ({
          messages: [...this.state.messages, msg]
        }))
      sendMessage(msg);
    }

  render() {
    return (
      <div className="App">
        <Header />
        {/* <button onSubmit={this.handleSubmission}>Send</button> */}
        <ChatRoom messages={this.state.messages} />
        <MessageForm sendMessage={this.handleSubmission} connect={connect} />
      </div>
    );
  }
}

export default App;
