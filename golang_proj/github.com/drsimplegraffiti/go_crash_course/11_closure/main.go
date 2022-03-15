package main

import "fmt"

func main() {

	// Declaring the variable
	GFG := 0

	// Assigning an anonymous
	// function to a variable
	counter := func() int {
		GFG += 1
		return GFG
	}

	fmt.Println(counter())
	fmt.Println(counter())

}
