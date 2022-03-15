package main

import "fmt"

func main() {
	a := 59
	b := 10

	// If else
	if a < b {
		fmt.Printf("%d is less than %d\n", a, b)
	} else {
		fmt.Printf("%d is greater than %d\n", a, b)
	}

	//else if

	color := "blue"
	if color == "red" {
		fmt.Println("color is red")
	} else if color == "blue" {
		fmt.Println("color is blue")
	} else {
		fmt.Println("color is neutral")

	}

	// Switch
	ride := "benzu"
	switch ride {
	case "benz":
		fmt.Println("Ride is benz")
	case "volvo":
		fmt.Println("Ride is volvo")
	case "mazda":
		fmt.Println("Ride is mazda")
	default:
		fmt.Println("Ride is not defined")
	}

}
