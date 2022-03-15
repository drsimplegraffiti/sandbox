package main

import "fmt"

func greeting(name string) string {
	return "Hello " + name
}

func getSum(num1 int, num2 int) int {
	return num1 + num2
}

func multiplyNumber(num1, num2, num3 int) int {
	return num1 * num2 * num3
}

func main() {
	fmt.Println(greeting("joe"))
	fmt.Println(getSum(7, 8))
	fmt.Println(multiplyNumber(3, 4, 4))
}
