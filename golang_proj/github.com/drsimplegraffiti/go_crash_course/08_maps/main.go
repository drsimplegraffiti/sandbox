package main

import "fmt"

func main() {
	//define maps
	emails := make(map[string]string)

	// Assign key values pair
	emails["Bob"] = "tim@gmail.com"
	emails["Tim"] = "jane@gmail.com"
	emails["wick"] = "wick@gmail.com"

	fmt.Println(emails)
	fmt.Println(emails["Bob"])
	fmt.Println(len(emails))

	// Delete one
	delete(emails, "Bob")
	fmt.Println(emails)

	//Declare maps and add key value
	person := map[string]string{"Victor": "victor@gmail.com", "Joy": "joy@gmail.com"}
	fmt.Println(person)

}
