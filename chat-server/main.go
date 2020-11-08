package main

import (
	"fmt"
	"net/http"

	"github.com/ch2isk4kos/gover-react/pkg/websocket"
)

var PORT string = ":3000"

func main() {
	initAndConfigRoutes()
	fmt.Printf("Listening on %s\n", PORT)
	http.ListenAndServe(PORT, nil)
}

func initAndConfigRoutes() {
	pool := websocket.NewPool()
	go pool.Start()

	http.HandleFunc("/chatroom", func(w http.ResponseWriter, r *http.Request) {
		serveWs(pool, w, r)
	}) 
}

// define WebSocket endpoint
func serveWs(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	// upgrade to websocket connection
	conn, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%v\n", err)
	}

	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
	}

	pool.Register <- client
	client.Read()
}


