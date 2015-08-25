"use strict";
let items = new Set()

items.add(5)
items.add(5)
items.add(51)
items.add(51)
console.log(items.size)

items = new Set([1,2,3,5,65,4,53,5,3])

console.log(items.size)
console.log(items.has(5))
items.delete(5)
console.log(items.has(5))

for (let num of items) {
	console.log(num)
}

items.forEach(function(elem) {console.log(elem)})
