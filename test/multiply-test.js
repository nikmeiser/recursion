

assert = require('assert')
vows = require('vows')
Calculator = require('../lib/calculator.js')

vows.describe('calculator-multiply').addBatch({
	"When using calculator": {
		topic: new Calculator,
		"when the multiply() method is passed 5 and 4 it should return 20": function(calculator) {
			assert.equal(calculator.multiply(5,4), 20)
		}
	}
}).addBatch({
        "When using calculator": {
                topic: new Calculator,
                "when the multiply() method is passed a 0 it should always return 0": function(calculator) {
                        assert.equal(calculator.multiply(0,5), 0)
			assert.equal(calculator.multiply(8,0), 0)
                }
        }
}).addBatch({
        "When using calculator": {
                topic: new Calculator,
                "when the multiply() method is passed two negative numbers it should return a positive number": function(calculator) {
                        assert.equal(calculator.multiply(-3, -4), 12)
                }
        }
}).addBatch({
        "When using calculator": {
                topic: new Calculator,
                "when the multiply() method is passed only one negative number it should return a negative number": function(calculator) {
                        assert.equal(calculator.multiply(5, -5), -25)
                }
        }
}).addBatch({
        "When using calculator": {
                topic: new Calculator,
                "when the multiply() method is passed a 1 it should return the other number": function(calculator) {
                        assert.equal(calculator.multiply(1,5), 5)
			assert.equal(calculator.multiply(8,1), 8)
                }
        }
}).export(module)
