

assert = require('assert')
vows = require('vows')
Calculator = require('../lib/calculator.js')

vows.describe('calculator-fibonacci').addBatch({
        "When using calculator": {
                topic: new Calculator,
                "when the fibonacci() method is passed 5 it should return 8": function(calculator) {
                        assert.equal(calculator.fibonacci(5), 8)
                }
        }
}).addBatch({
        "When using calculator": {
                topic: new Calculator,
                "when the fibonacci() method is passed 0 it should return 1": function(calculator) {
                        assert.equal(calculator.fibonacci(0), 1)
                }
        }
}).addBatch({
        "When using calculator": {
                topic: new Calculator,
                "when the fibonacci() method is passed a negative number it should return -1": function(calculator) {
                        assert.equal(calculator.fibonacci(-3), -1)
                }
        }
}).export(module)
