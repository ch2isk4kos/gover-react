const socket = new WebSocket("ws://localhost:3000/chatroom");

// connect to WebSocket endpoint and listen for events
let connect = () => {
  console.log("Connecting...");

  socket.onopen = () => {
    console.log("Connection Successful.");
  };

  socket.onmessage = msg => {
    console.log(msg);
  };

  socket.onclose = event => {
    console.log("Lost Connection: ", event);
  };

  socket.onerror = err => {
    console.log("WebSocket Error: ", err);
  };
};

// send messages to WebSocket endpoint
let sendMessage = msg => {
  console.log("Sending Message: ", msg);
  socket.send(msg);
}

export { connect, sendMessage };