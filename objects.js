"use strict";
let createPerson = (name,age) => ({name:name, age:age})
//doesn't work on node 0.12
//let createPerson1 = function(name, age){ return {name, age};}
console.log(createPerson("chef",18))
//console.log(createPerson1("chef",18))
//doesn't work on node 0.12
// var person = {
// 	name:Nicholas,
// 	sayName(){
// 		console.log(this.name)
// 	}
// }

var suffix = name
//doesn't work on node 0.12
// let person = {
// 	["first" + suffix] : "Nicholas",
// 	["lasr" + suffix] : "Zakas"
// };

// console.log(person["first name"])
// console.log(person["last name"])