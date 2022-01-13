const assert = require('chai').assert;
// const app = require('../app');
const sayHello = require('../app').sayHello;
const multiplyNumbers = require('../app').multiplyNumbers;

//description of test
describe('App', function() {
    it('sayHello should return hello', function() {
        let result = sayHello();
        assert.equal(result, 'hello');
    });

    it('sayHello should return type string', function() {
        let result = sayHello();
        assert.typeOf(result, 'string');
    });

    it('multiplyNumbers should be above 10', function() {
        let result = multiplyNumbers(4, 8);
        assert.isAbove(result, 10);
    });

    it('multiplyNumbers should return type number', function() {
        let result = multiplyNumbers(4, 8);
        assert.typeOf(result, 'number');
    });


});