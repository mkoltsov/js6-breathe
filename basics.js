"use strict";

var count = 1

if (true) {
	let count = 40

	console.log(count)
}

var options = {name:"chef", position:"pupa"}
//doesn't work on node 0.12
//var {name, position} = options

//console.log("%s - %s", name, position)

console.log(count)
if (true) {
	const chef = "chef"
	console.log(chef)
}

console.log(chef)

(function chef() {
	if (true) {
		let pupa1 = 1
	}
	console.log(pupa1)
})()

