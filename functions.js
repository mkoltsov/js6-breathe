"use strict";
//default params don't work on node 0.12
//(function def(chef=111, pupa=222) {
//	console.log(chef, pupa)
//})()
//rest params don't work on node 0.12
//function restParams(chef, ...rest) {
//	console.log(chef, rest)
//}

//restParams(1,2,3,4,5,6,7,8)
//destructuring doesn't work on node 0.12
//function({chef, pupa}) {
//	console.log(111)
//}

let struct = [1,3,5,7]
//the spread operator doesn't work on node 0.12
//console.log(Math.max(...struct))

function doSomething() {}

var doAnotherThing = function(){}

console.log(doSomething.name)
console.log(doAnotherThing.name || NaN)

if (true) {
	console.log(typeof doSomething1)
	//console.log(typeof doSmthng)
	function doSomething1() {}
	let doSmthng = function() {}
	console.log(typeof doSmthng)
	doSomething1()
}

console.log(typeof doSomething1)