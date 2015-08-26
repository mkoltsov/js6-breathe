"use strict";

function *createIterator() {
	yield 1
	yield 2
	yield 3
}

let iterator = createIterator()

for (let i of iterator) {
	console.log(i)
}