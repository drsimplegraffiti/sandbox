// define package main
package main

import (
	//json core package
	"encoding/json"
	"log" //logs error
	"math/rand"
	"net/http" // for creating api
	"strconv"  //string converter

	"github.com/gorilla/mux"
)

// Creating Model: Book Struct (Model)
type Book struct {
	ID	    string	`json:"id"`
	Isbn	string	`json:"isbn"`
	Title	string	`json:"title"`
	Author	*Author	`json:"author"`
}

//Author Model (struct)
type Author struct {
	Firstname string 	`json:"firstname"`
	Lastname string 	`json:"lastname"`
}

// Initiate books variable as a sliceBook Struct
var books []Book

//Routes
//@ Get all books
func getBooks(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(books)
}


//@ Get single book
func getBook(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r) // Get params
	
	// Loop through books data and find id
	for _, item := range books {
		if item.ID == params["id"]{
			json.NewEncoder(w).Encode(item)
			return
		}
	}
	json.NewEncoder(w).Encode(&Book{})
}
//@ Create a new book
func createBook(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	var book Book
	_ = json.NewDecoder(r.Body).Decode((&book))
	book.ID = strconv.Itoa(rand.Intn(10000000)) // convert integer to a string
	books = append(books, book)
	json.NewEncoder(w).Encode(book)
}
//@ Update book
func updateBook(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for index, item := range books {
		if item.ID == params["id"] {
			books = append(books[:index], books[index+1:]...)
			var book Book
			_ = json.NewDecoder(r.Body).Decode(&book)
			book.ID = params["id"]
			books = append(books, book)
			json.NewEncoder(w).Encode(book)
			return
		}
	}
}

//@ Delete book
func deleteBook(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for index, item := range books {
		if item.ID == params["id"] {
			books = append(books[:index], books[index+1:]...)
			break
		}
	}
	json.NewEncoder(w).Encode(books)
}


func main(){
	//initiate the router
	r := mux.NewRouter()

	//Mock data
	books = append(books, Book{ID: "1", Isbn: "456467", Title: "Dunghill", Author: &Author {Firstname: "James", Lastname: "knox"}})
	books = append(books, Book{ID: "2", Isbn: "233467", Title: "coding", Author: &Author {Firstname: "Joseph", Lastname: "Brian"}})
	books = append(books, Book{ID: "3", Isbn: "903467", Title: "turing", Author: &Author {Firstname: "chris", Lastname: "Evans"}})

	//Create route handler
	r.HandleFunc("/api/books", getBooks).Methods("GET")
	r.HandleFunc("/api/books/{id}", getBook).Methods("GET")
	r.HandleFunc("/api/books", createBook).Methods("POST")
	r.HandleFunc("/books/{id}", updateBook).Methods("PUT")
	r.HandleFunc("/api/books/{id}", deleteBook).Methods("DELETE")

	//run a server
	log.Fatal(http.ListenAndServe(":8000", r))  //log.Fatal throws error if server fails
}