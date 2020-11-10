import React, { useState } from 'react';
import './Message.css';

const Message = (props) => {
  let msg = JSON.parse(props.message);
  const [ message, setMessage ] = useState(msg);
  return (
    <div className="Message">
      {/* {message.body} */}
      <div>{message.body}</div>
    </div>
  )
}

export default Message;

// import React, { Component, useState } from "react";
// import "./Message.scss";

// class Message extends Component {
//   constructor(props) {
//     super(props);
//     let temp = JSON.parse(this.props.message);
//     this.state = {
//       message: temp
//     };
//   }

//   render() {
//     return <div className="Message">{this.state.message.body}</div>;
//   }
// }

// export default Message;