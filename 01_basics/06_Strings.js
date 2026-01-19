const name ="Avinash"
const repoCount = 40

// console.log(name + repoCount+" value") //  Not recommended method for nowadays. Use below method instead.

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('AvinashKushwaha-ak')
// console.log(gameName.length)
// console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf('i'))

const newString = gameName.substring(1,3) // endvalue is not included in it it extracts string upto 2 only.Negative indexing is not supported.
console.log(newString)

console.log(gameName.length)
const anotherString = gameName.slice(-18,4) //We can use negative values in slice it is same as substring.
console.log(anotherString)


const newStringone= "    Avinash Kushwaha    "
console.log(newStringone)
console.log(newStringone.trim()) //It trims or removes extra space from the string

const url ="https://avinash-specc.git989hub.io" 
console.log(url)
console.log(url.replace("989",""))
console.log(url.includes("specc")) //checks for a substring

console.log(gameName.split('-')) // separates content based on the value provided in the braces and arranges themselves in an array.


// Practice different string methods.