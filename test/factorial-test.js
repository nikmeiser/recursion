

assert = require('assert')
vows = require('vows')
Calculator = require('../lib/calculator.js')

vows.describe('calculator-factorial').addBatch({
	"When using calculator": {
		topic: new Calculator,
		"when the factorial() method is passed 5 it should return 120": function(calculator) {
			assert.equal(calculator.factorial(5), 120)
		}
	}
}).addBatch({
        "When using calculator": {
                topic: new Calculator,
                "when the factorial() method is passed 0 it should return 1": function(calculator) {
                        assert.equal(calculator.factorial(0), 1)
                }
        }
}).addBatch({
        "When using calculator": {
                topic: new Calculator,
                "when the factorial() method is passed a negative number it should return -1": function(calculator) {
                        assert.equal(calculator.factorial(-3), -1)
                }
        }
}).export(module)
