import React from 'react';
import './ChatRoom.css';

class ChatRoom extends React.Component {
  render() {
    const msgs = this.props.messages.map((msg, index) => {
      console.log("messages[msg]:", msg)
      return <p key={index}>{ msg.data }</p>
    })

    console.log("Messages props: ", this.props);
    
    return (
      <div className="Messages">
        <h2>Chatroom</h2>
        { msgs }
      </div>
    )
  }

}

export default ChatRoom;
