package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
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
	routesConfig()
	fmt.Printf("Listening on %s\n", PORT)
	http.ListenAndServe(PORT, nil)
}

func routesConfig() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, `Already Home`)
	})
}

// defiine reader to listen for new messages sent to ws endpoint
func reader(conn *websocket.Conn) {
	for {
		// read message
		message, p, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}

		// console message
		fmt.Println(string(p))

		// write message
		if err := conn.WriteMessage(message, p); err != nil {
			log.Println(err)
			return
		}
	}
}
