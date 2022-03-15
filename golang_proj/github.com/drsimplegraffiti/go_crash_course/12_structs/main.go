package main

import (
	"fmt"
	"strconv"
)

//Define person struct
type Person struct {
	firstName string
	lastName  string
	city      string
	gender    string
	age       int
}

// Methods : value receiver and pointer receiver
// Greeting method (value receiver)
func (p Person) greet() string {
	return "hello, my name is" + p.firstName + " " + p.lastName + "and i am " + p.gender + " " + strconv.Itoa(p.age)
}

// Pointer receiver
func (p *Person) hasBirthday() {
	p.age++
}

func main() {
	//Init person using struct
	person1 := Person{firstName: "John", city: "Sagamu", lastName: "Wick", gender: "f", age: 78}
	person2 := Person{firstName: "Emily", city: "Boston", lastName: "Wick", gender: "m", age: 45}

	// Alternatively,

	person3 := Person{"Victor", "Boston", "Wick", "m", 45}

	// Get single filed

	fmt.Println(person1)
	fmt.Println(person2)
	fmt.Println(person3)
	fmt.Println(person1.firstName)
	person1.age++
	fmt.Println(person1)
	//Pointer receiver
	person1.hasBirthday()

	//value receiver
	fmt.Println(person1.greet())

}
