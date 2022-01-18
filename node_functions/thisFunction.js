const person = {
    name: "jane",
    age: 56,
    greet: () => {
        console.log('hello' + this.name);
    }
}

console.log(person);
console.log(person.greet);