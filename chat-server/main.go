package main

import (
	"fmt"
	"net/http"

	"github.com/ch2isk4kos/gover-react/chat-server/pkg/websocket/websocket.go"
)

var PORT string = ":3000"

func main() {
	initAndConfigRoutes()
	fmt.Printf("Listening on %s\n", PORT)
	http.ListenAndServe(PORT, nil)
}

func initAndConfigRoutes() {
	http.HandleFunc("/chatroom", serveWs)
}

// define WebSocket endpoint
func serveWs(w http.ResponseWriter, r *http.Request) {
	// upgrade to websocket connection
	ws, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Println(err)
	}

	go websocket.Writer(ws)
	websocket.Reader(ws)
}


