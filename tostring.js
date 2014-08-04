"use strict"

var Stringify = function(){this.retString = "", this.localString = ""}


Stringify.prototype.toString = function(num){
	var tmpDigit = num
	var tmpDigits = num

	while(tmpDigits > 0){
		tmpDigit = tmpDigits % 10
		tmpDigits = Math.floor(tmpDigits / 10)

		if (tmpDigit === 0) {
			this.localString += "0"
		} else if(tmpDigit === 1) {
			this.localString += "1"
		} else if(tmpDigit === 2) {
			this.localString += "2"
		} else if(tmpDigit === 3) {
			this.localString += "3"
		} else if(tmpDigit === 4) {
			this.localString += "4"
		} else if(tmpDigit === 5) {
			this.localString += "5"
		} else if(tmpDigit === 6) {
			this.localString += "6"
		} else if(tmpDigit === 7) {
			this.localString += "7"
		} else if(tmpDigit === 8) {
			this.localString += "8"
		} else if (tmpDigit === 9) {
			this.localString += "9"
		}
	}

}

Stringify.prototype.reverse = function(){
	for(var i = this.localString.length; i >= 0; --i) {
		//console.log(this.localString.charAt(i))
		this.retString += this.localString.charAt(i)
	}
}

Stringify.prototype.run = function(num){
	this.toString(num)
	this.reverse()
	return this.retString
}

var s = new Stringify().run(8582245346876324)
console.log("%s:%s", typeof s, s )
