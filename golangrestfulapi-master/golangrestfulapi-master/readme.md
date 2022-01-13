
# Golang Rest Api (Crud Operation) Tuts

## HOW TO SETUP Golang project
`mkdir -p $GOPATH/src/github.com/drsimplegraffiti golang-restapi`


## SET gopath
`export GOPATH=$HOME/go`

## To run go file
`go run main.go`

## To compile and build
`go build`

to run the build file ./<name of file>
./


## Add to every go project to mode file
git init
git remote add origin https://github.com/<github profile name>/<project name>
`git remote add origin https://github.com/syntaqx/dacode`
go mod init

## install mux
go get -u github.com/gorilla/mux

## packages used
```import (
	"fmt"
	"encoding/json"   //json core package
	"log"  //logs error
	"net/http"  // for creating api
	"math/rand"
	"strconc"  //string converter
	"github.com/gorilla/mux"
	          
)
```


## Rebuild and run server in one command
`go build && ./golangRestApi`
	
`go build && ./<project name>`

## @desc GET request api/books
`localhost:<port>/api/**books` 

[postman docs](https://documenter.getpostman.com/view/15544476/TzzGHu3V)

## To do: 
    * fix CRUD update
    * Use mongodb as Database
