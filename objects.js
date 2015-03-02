"use strict";
let createPerson = (name,age) => ({name:name, age:age})
//doesn't work on node 0.12
//let createPerson1 = function(name, age){ return {name, age};}
console.log(createPerson("chef",18))
//console.log(createPerson1("chef",18))