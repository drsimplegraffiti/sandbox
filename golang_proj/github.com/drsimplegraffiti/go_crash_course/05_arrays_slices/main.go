package main

import "fmt"

func main() {
	//Arrays
	var animals [6]string

	//Assign values
	animals[0] = "monkey"
	animals[1] = "rat"
	animals[2] = "dog"
	animals[3] = "cat"

	// Declare and assign the same time
	personArr := [4]string{"Miracle", "John", "Jane"}

	fmt.Println(animals)
	fmt.Println(animals[2])
	fmt.Println(personArr)

	// Slices
	cars := []string{"volvo", "benz", "mazda"}
	fmt.Println(cars)

	// Get length of index
	fmt.Println(len(cars))

	//Get range
	fmt.Println(cars[1:2])
	fmt.Println(cars[2:])

}
