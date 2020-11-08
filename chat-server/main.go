package main

import (
	"fmt"
	"net/http"
)

var PORT string = ":3000"

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
