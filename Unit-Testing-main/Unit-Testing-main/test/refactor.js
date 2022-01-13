// the test could be re written in this way


const assert = require('chai').assert;
const app = require('../app');

//description of test
describe('App', function() {
    it('sayHello should return hello', function() {
        let result = app.sayHello();
        assert.equal(result, 'hello');
    });

    it('sayHello should return type string', function() {
        let result = app.sayHello();
        assert.typeOf(result, 'string');
    });

    it('multiplyNumbers should be above 10', function() {
        let result = app.multiplyNumbers(4, 8);
        assert.isAbove(result, 10);
    });

    it('multiplyNumbers should return type number', function() {
        let result = app.multiplyNumbers(4, 8);
        assert.typeOf(result, 'number');
    });


});