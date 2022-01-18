const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3]
}

console.log(toArray(1, 3, 4));

// Example 2
const revampedArgs = (...args) => {
    return args
}
console.log(revampedArgs(1, 3, 4, 6, 6, 8));


// example3
const profile = (...prop) => {
    return prop;
}

console.log(profile('slim', 'tall', 67));