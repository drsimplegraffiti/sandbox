const sum = require('./sum');

test('properly adds two number ', () => {
    expect(sum(1, 2)).toBe(3)
})

//to run jest ...cd into the folder
// npm test