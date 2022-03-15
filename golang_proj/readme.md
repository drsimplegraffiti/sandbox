#### Print a simple hello world

> First initialize a golang project, open terminal and run

- [x] go mod init [project name]
- [x] go mod init golang_proj

The command generates the `go.mod ` file

---

All golang code must belong to a package

```go
package main

import "fmt"

func main() {
	fmt.Print("Hello world")
}

```

---

#### Executing go files

> go run [name of file]

- go run main.go

---

#### Print with a new line

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello world")
}

```

---

#### Variables

```go
package main

import "fmt"

func main() {
	fmt.Println("Welcome to our conference Booking application")
	fmt.Println("Get tickets here")

	var conferenceName = "Go conference"
	fmt.Println(conferenceName)
}
```

---

#### Parsing variables separating with commas

```go
package main

import "fmt"

func main() {
	var conferenceName = "Go conference"
	const conferenceTickets = 50
	var remainingTickets = 50

	fmt.Println("Welcome to", conferenceName, "conference Booking application")
	fmt.Println("We have a total of", conferenceTickets, "tickets and", remainingTickets, "are still available")
	fmt.Println("Get tickets here")

}
```

---

#### Formatting output [printf]

```go
package main

import "fmt"

func main() {
	var conferenceName = "Go conference"
	const conferenceTickets = 50
	var remainingTickets = 50

	fmt.Printf("Welcome to %v conference Booking application\n", conferenceName)
	fmt.Printf("We have a total of %v tickets and %v are still available.\n", conferenceTickets, remainingTickets)
	fmt.Printf("Get tickets here")

}

```

> %v, %T are called place holders

---

#### Data Types

> When variables are declared without assigning a value, go throws an error, e.g :

```go
var userName //Error
```

- To fix, you give it a data type explicitly

```go
var userName string
var userTickets int

```

```go
package main

import "fmt"

func main() {
	var conferenceName = "Go conference"
	const conferenceTickets = 50
	var remainingTickets = 50

	fmt.Printf("Welcome to %v conference Booking application\n", conferenceName)
	fmt.Printf("We have a total of %v tickets and %v are still available.\n", conferenceTickets, remainingTickets)
	fmt.Printf("Get tickets here\n")

	var userName string
	var userTickets int

	userName = "Jim"
	userTickets = 5
	fmt.Printf("User %v booked %v tickets.\n", userName, userTickets)

}
```

---

#### TypeOf [%T]

```go
package main

import "fmt"

func main() {
	var conferenceName = "Go conference"
	const conferenceTickets = 50
	var remainingTickets = 50

	fmt.Printf("conferenceTickets %T , remainingTickets %T, conferenceName %T \n", conferenceTickets, remainingTickets, conferenceName)

	// %v is the value
	fmt.Printf("Welcome to %v conference Booking application\n", conferenceName)
	fmt.Printf("We have a total of %v tickets and %v are still available.\n", conferenceTickets, remainingTickets)
	fmt.Printf("Get tickets here\n")

	var userName string
	var userTickets int

	userName = "Jim"
	userTickets = 5
	fmt.Printf("User %v booked %v tickets.\n", userName, userTickets)

}
```

> We can statically type our values e.g

```go
const userName string = "Joe"
var accountNumber int = 676565
```

> We have different int values showing the length of an integer

```go
int --> whole numbers
int8 ==> byte
int16 ==> short
int32 ==> int
int64 ==> long


uint: Positive Whole numbers
floating points
```

#### Other ways of assigning variables

```go
// instead of
var name string = "Abayomi"

// we can use
name:= "Abayomi"
```

The `:=` doesn't work with constant

---

#### Working with user input

```go
fmt.Scan()
```

#### Pointers are the memory address of the variable (hashed) we declared

```go
package main

import "fmt"

func main() {
	var userName string
	var userTickets int
	fmt.Println("Please enter your first name: ")
	fmt.Scan(&userName)
	userTickets = 8
	fmt.Printf("user %v has %v remaining", userName, userTickets)

}

```

---

## Input examples

```go
package main

import "fmt"

func main() {

	var firstName string
	var lastName string
	var email string
	var userTickets int

	fmt.Println("Please enter your first name: ")
	fmt.Scan(&firstName)

	fmt.Println("Please enter your last name: ")
	fmt.Scan(&lastName)

	fmt.Println("Please enter your email: ")
	fmt.Scan(&email)

	fmt.Println("Please enter number of tickets: ")
	fmt.Scan(&userTickets)

	fmt.Printf("Hell0 %v %v , an otp will be sent to your %v with a user ticket number %v \n", firstName, lastName, email, userTickets)

}

```

```go
package main

import "fmt"

func main() {

	// conferenceName := "Golang conference"
	const conferenceTickets int = 50
	var remainingTickets uint = 50

	var firstName string
	var lastName string
	var email string
	var userTickets uint

	fmt.Println("Please enter your first name: ")
	fmt.Scan(&firstName)

	fmt.Println("Please enter your last name: ")
	fmt.Scan(&lastName)

	fmt.Println("Please enter your email: ")
	fmt.Scan(&email)

	fmt.Println("Please enter number of tickets: ")
	fmt.Scan(&userTickets)

	remainingTickets = remainingTickets - userTickets
	fmt.Printf("Hell0 %v %v , an otp will be sent to your %v with a user ticket number %v \n", firstName, lastName, email, userTickets)
	fmt.Printf("remaining tickets is %v \n", remainingTickets)
}
```

---

## Arrays ans slices

> We declare an array in go with fixed size in [] with a data type

```go
var booking =[50]string{}
var person =[50]string{'tall', 'nice', 'darks'}
var mixedData = [20]string{'age', 5, 'money'} // this will throw an error because we have defined it as a string
```

---

## Array type

```go
var bookings [50] string
```

---

#### Adding new element to an array

```go

package main

import "fmt"

func main() {

	var bookings [50]string

	bookings[0] = "joseph"
	bookings[1] = "lee"
	fmt.Printf("Whole arrays %v \n", bookings)
	fmt.Printf("Array type %T \n", bookings[0])
	fmt.Printf("Array length %v \n", (len(bookings)))

}

```

---

#### Defining a list/array that is more dynamic using slices

1.

```go
package main

import "fmt"

func main() {

	var bookings []string
	bookings = append(bookings, "dunghill")

	fmt.Printf("%v", bookings)

}
```

2.

```go
package main

import "fmt"

func main() {

	bookings := []string{}
	bookings = append(bookings, "dunghill")

	fmt.Printf("%v", bookings)

}
```

---

#### Loops

we have only for loop in go i.e no while loop, foreach, do loop like in js

##### Infinite loop

```go
package main

// infinite loops

import "fmt"

func main() {

	bookings := []string{}
	bookings = append(bookings, "dunghill")

	for {
		fmt.Printf("%v", bookings)
	}

}

```

##### for loop example 2

```go
package main

import "fmt"

func main() {

	for {
		var remainingTickets uint = 50

		var firstName string
		var lastName string
		var email string
		var userTickets uint

		fmt.Println("Please enter your first name: ")
		fmt.Scan(&firstName)

		fmt.Println("Please enter your last name: ")
		fmt.Scan(&lastName)

		fmt.Println("Please enter your email: ")
		fmt.Scan(&email)

		fmt.Println("Please enter number of tickets: ")
		fmt.Scan(&userTickets)

		remainingTickets = remainingTickets - userTickets
		fmt.Printf("Hell0 %v %v , an otp will be sent to your %v with a user ticket number %v \n", firstName, lastName, email, userTickets)
		fmt.Printf("remaining tickets is %v \n", remainingTickets)
	}
}

```

---

##### For each loop

`_` is known as blank identifier

```go
package main

import (
	"fmt"
)

func main() {

	arrayOne := [3]string{"Apple", "Mango", "Banana"}

	for index, element := range arrayOne {

		fmt.Println(index)
		fmt.Println(element)
		// break
	}

}

```

#### Conditional statement

```go
package main

import "fmt"

func main() {

	if 7%2 == 0 {
		fmt.Println("7 is even")
	} else {
		fmt.Println("7 is odd")
	}

	if 8%4 == 0 {
		fmt.Println("8 is divisible by 4")
	}

	if num := 9; num < 0 {
		fmt.Println(num, "is negative")
	} else if num < 10 {
		fmt.Println(num, "has 1 digit")
	} else {
		fmt.Println(num, "has multiple digits")
	}
}

```

---

#### Importing modules

```go
package main

import (
	"fmt"

	r "math/rand"
)

func main() {

	for {
		var remainingTickets uint = 50

		var firstName string
		var lastName string
		var email string
		var userTickets uint

		fmt.Println("Please enter your first name: ")
		fmt.Scan(&firstName)

		fmt.Println("Please enter your last name: ")
		fmt.Scan(&lastName)

		fmt.Println("Please enter your email: ")
		fmt.Scan(&email)

		fmt.Println("Please enter number of tickets: ")
		fmt.Scan(&userTickets)

		ip, port := "127.0.0.1", "6787"
		remainingTickets = remainingTickets - userTickets
		fmt.Printf("Hell0 %v %v , an otp will be sent to your %v with a user ticket number %v \n", firstName, lastName, email, userTickets)
		fmt.Printf("remaining tickets is %v \n", remainingTickets)
		fmt.Println(r.Int())
		fmt.Println(ip, port)
	}
}


```

#### Create a server

```go
package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", HelloServer)
	http.ListenAndServe(":8080", nil)
}

func HelloServer(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
}
```

---

#### Basic commands

> go help
> go env

#### Installing packages

[download packages here](godoc.org)
go get [package link]

#### Data Types

```go
package main

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
}
```

---

#### importing packages

The packages must be arranged in separate lines

```
import (
	"fmt"
	"math"
)

```
