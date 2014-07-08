
Calculator = module.exports = function(){}

Calculator.prototype.factorial = function(n){
	if (n < 0) {
		return -1
	} else if ( n == 0) {
		return 1
	} else {
		return n * this.factorial(n-1)
	}
}

Calculator.prototype.fibonacci = function(n){
	if (n < 0) {
		return -1
	} else if (n < 2) {
		return 1
	} else {
		return this.fibonacci(n-1) + this.fibonacci(n-2)
	}
}

Calculator.prototype.multiply = function(x,y){
	if (x == 0 || y == 0) {
		return 0
	} else if (x == 1) {
		return y
	} else if ( y == 1) {
		return x
	} else if (( x < 0 && y > 0 ) || ( x > 0 && y < 0 )) {
		return -(Math.abs(x) + this.multiply(Math.abs(x),Math.abs(y)-1))
	} else {
		return (Math.abs(x) + this.multiply(Math.abs(x),Math.abs(y)-1))
	}
}

Calculator.prototype.hanoi = function(n) {
	if ( n < 1) {
		return -1
	} else {


calculator = new Calculator
/*
console.log(calculator.factorial(5))

for (i = -3; i <= 3; i += 1) {
	console.log('%d:%d', i, calculator.fibonacci(i))
}

console.log(calculator.multiply(-0,5))
*/

