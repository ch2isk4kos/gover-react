package main

import (
	"fmt"
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
