import React from 'react';
import './Messages.css';

class Messages extends React.Component {
  render() {
    const messages = this.props.messages.map((msg, idx) => {
      return <p key={idx}>{ msg.data }</p>
    })

    console.log("Messages props: ", this.props);
    
    return (
      <div className="Messages">
        <h2>Messages</h2>
        { messages }
      </div>
    )
  }

}

export default Messages;
