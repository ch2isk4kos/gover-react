package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/ch2isk4kos/gover-react/pkg/websocket"
)

var PORT string = ":3000"

// create uprader to read/write buffer size
var upgrader = websocket.Upgrader{
	ReadBufferSize: 1024,
	WriteBufferSize: 1024,
	// check origin of connection to accept request from React
	CheckOrigin: func(r *http.Request) bool { return true },
}

func main() {
	initAndConfigRoutes()
	fmt.Printf("Listening on %s\n", PORT)
	http.ListenAndServe(PORT, nil)
}

func initAndConfigRoutes() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, `Already Home`)
	})
	http.HandleFunc("/chatroom", serveWs)
}

// define WebSocket endpoint
func serveWs(w http.ResponseWriter, r *http.Request) {
	// console host address
	fmt.Println(r.Host)

	// upgrade to websocket connection
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
	}

	// openly listen for incoming messages
	reader(ws)
}


