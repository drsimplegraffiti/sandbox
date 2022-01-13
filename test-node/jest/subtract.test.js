const subtract = require('./subtract');

test('properly subtracts two number ', () => {
    expect(subtract(1, 2)).toBe(-1)
})

//to run jest ...cd into the folder
// npm test