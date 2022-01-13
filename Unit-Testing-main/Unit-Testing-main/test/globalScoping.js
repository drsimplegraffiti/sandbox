// let's put result in global scope


const assert = require('chai').assert;
const app = require('../app');


//Results
sayHelloResult = app.sayHello();
multiplyNumbersResult = app.multiplyNumbers(4, 8);

//description of test
describe('App', function() {
    it('sayHello should return hello', function() {
        assert.equal(sayHelloResult, 'hello');
    });

    it('sayHello should return type string', function() {
        assert.typeOf(sayHelloResult, 'string');
    });

    it('multiplyNumbers should be above 10', function() {
        assert.isAbove(multiplyNumbersResult, 10);
    });

    it('multiplyNumbers should return type number', function() {
        assert.typeOf(multiplyNumbersResult, 'number');
    });


});