// const score = 400

// const balance  = new Number(100)
// console.log(balance)
// console.log( balance.toString().length) //Converts to string so we can apply all of string properties to the initially declared number.
// console.log(balance.toFixed(2)) // Decides the value to be printed after the decimal.


// const otherNumber = 23.545
// console.log(otherNumber.toPrecision(3))//Focus on the no. of 3 values and round off the others.
// // Use it carefully might give answers in scientific notation as well if not handled properly.


// const hundreds = 1000000
// console.log(hundreds.toLocaleString()) //separates numbers as the local information of the system .
// console.log(hundreds.toLocaleString("en-US"))
// //Now it gives output as per the US standards.


// // +++++++++++++++++++++++++ Maths +++++++++++++++++++++++++

// console.log(Math.abs(343))
// console.log(Math.round(4.5))// Is used for rounding off the number
// console.log(Math.ceil(4.2)) // Always prefers the higher number even if there is a slight difference in the value.

// console.log(Math.floor(4.9)) // Always prefers the least value exact opposite of ceil.

// console.log(Math.min(3,43,5,5,6,4)) // Searches for the minimum value in the array.
// console.log(Math.max(343,43345,54553,334343))// Searches for the maximum value in the array.


console.log(Math.random())//Gives any random value between 0 and 1.
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)+ min))