import React, {useState} from 'react';
import './MessageForm.css';

const MessageForm = ({ sendMessage }) => {
  const [message, setMessage] = useState("");
  
  const handleOnKeyPress = (event) => {
    if (event.charCode === 13) {
      sendMessage(event.target.value)
      setMessage("");
    }
  }

  const handleOnChange = event => {
   setMessage(event.target.value)
  };

  return (
    <div className="MessageForm">
      <input
        value={message}
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress} 
      />

      <p>Press Enter</p>
    </div>
  )
}

export default MessageForm;