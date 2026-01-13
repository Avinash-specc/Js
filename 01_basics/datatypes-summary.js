// Primitive --> 7 types 
/* 
String, Number, Boolean, null,undefined,Bigint, Symbol

*/

//Non-Primitive  (Refrence type)
/*
Array,Objects,Functions

*/

//JavaScript is a dynamically typed language i.e we don't have to explicitly declare the type of variable declared.

// let isLoggedin = false
// isLoggedin = 3
// console.log(isLoggedin)

const isLoggedin = false
let userEmail;
const id =Symbol('123')
console.log(typeof(id))

const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 32334343434343434343434334324324324n //use n at the end to convert a number to bigint
console.log(typeof(bigNumber))


const heroes =["shaktiman", "naagraj", "doga"]
let myObj = {
    name:"Avinash",
    age:20
}

const myFunction = function(){
console.log("Hello world")
}

// const temp = Null

console.log(typeof (myFunction) );

console.log(typeof heroes)


