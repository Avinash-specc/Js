// singleton

// Object.create --> constructor method to declare object.

// object literals
const mySym = Symbol("key1")//Declaration of symbol

const jsUser = {
    name:"Avinash",
    "full name" : "Avinash Kushwaha", //Since it is not a valid identifier we have to first explicitly declare it a string then use bracket notation to call its value.
    [mySym]:"myKey1",
    age:20,
    location:"Jaipur",
    email:"avinash@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(jsUser.email) //Objects can be accessed by using dot , Prefer below syntax.It uses square braces. Both syntaxes are same.
console.log(jsUser["email"]) //As key is stored as string without any explicit declaration use "Double_quotes" to call the key which outputs value.
console.log(jsUser["full name"])
// console.log(typeof jsUser.mySym) // It outputs string if mySym is not defined as a symbol in the object.

console.log(jsUser[mySym]) //No need to use double quotes as it is a symbol.

jsUser.email = "avinashkushwaha@gmail.com"
// Object.freeze(jsUser) //Prevents any further change in the object.

jsUser.email= "adfja@gmail.com"
console.log(jsUser.email)

console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js user")
}
jsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())