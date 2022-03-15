package main

import "fmt"

func main() {
	//Data types
	//string
	//int
	//float
	//int int8 int16 int32 int64
	//uint uint8 uint16 uint32 uint64 uintptr
	// byte - alias for uint8
	// rune - alias for uint32
	//float32 float64
	//complex64 complex128

	//Using var
	var name string = "Joe"
	var age int = 56
	var account int32 = 45

	var isReady = true

	occupation := "developer" //shorthand:  You cant use this declaration type outside a function
	income := 9.78

	fiancee, email := "miracle", "mimi@gmail.com"

	fmt.Println(name, age, account, isReady, occupation, income, fiancee, email)
	fmt.Printf("%T\n", age)
	fmt.Printf("%T\n", name)
	fmt.Printf("%T\n", account)
	fmt.Printf("%T\n", isReady)
	fmt.Printf("%T\n", income)
}
