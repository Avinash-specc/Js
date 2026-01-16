const myArr = [0,1,2,3,4,5]
// console.log(myArr) //Javascript arrays are resizable and can contain a mix of different data types.

// console.log(myArr[0])

const myHeroes = ["Shaktiman", "naagraj"]

// const myArr2 = new Array(1,2,3,4) //Another method to declare array

// myArr.push(6) //adds no. 6 at the end of the array
// myArr.push(7)
// console.log(myArr)

// myArr.pop()
// console.log(myArr)

//myArr.shift()// Removes the first element from the array.Not Advised to use for optimizations.
// myArr.unshift(9) // Adds 9 at the end oftenly not advised to use this b'coz of optimizations.

// console.log(myArr.includes(9)) //Checks whether 9 is available in the array or not.
// console.log(myArr.indexOf(5)) // Returns the index of 5.

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)//Prints the value in string i.e it's type is changed to string.
// console.log(typeof newArr)

//slice , splice

console.log("A ",myArr)
const myn1 = myArr.slice(1,3) // Does not affect the original array also doesn't include last index

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1,3) //Affect the original array removes the entire part from 1 to 3 in the array. (It includes the last index as well.)
console.log("C", myArr)
console.log(myn2)
