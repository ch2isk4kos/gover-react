import React from 'react';
import Message from './Message';
import './ChatRoom.css';

class ChatRoom extends React.Component {
  render() {
    const chat = this.props.messages.map(msg => <Message key={msg.timeStamp} message={msg.data} /> );

    console.log("Messages props: ", this.props);
    
    return (
      <div className="Messages">
        <h2>Chatroom</h2>
        <span crossOrigin="true">{ chat }</span>
      </div>
    )
  }

}

export default ChatRoom;
