package main

import "fmt"

func main() {
	a := 7
	b := &a
	fmt.Println(a, b)
	fmt.Printf("%T", b)

	// Used to read value from address
	fmt.Println(*b)
	fmt.Println(*&b)

	// Change value with pointer to
	*b = 10
	fmt.Println(a)
}
