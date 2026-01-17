// singleton

// Object.create --> constructor method to declare object.

// object literals
const mySym = Symbol("key1")//Declaration of symbol

const JsUser = {
    name:"Avinash",
    "full name" : "Avinash Kushwaha", //Since it is not a valid identifier we have to first explicitly declare it a string then use bracket notation to call its value.
    [mySym]:"myKey1",
    age:20,
    location:"Jaipur",
    email:"avinash@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email) //Objects can be accessed by using dot , Prefer below syntax.It uses square braces. Both syntaxes are same.
console.log(JsUser["email"]) //As key is stored as string without any explicit declaration use "Double_quotes" to call the key which outputs value.
console.log(JsUser["full name"])
// console.log(typeof JsUser.mySym) // It outputs string if mySym is not defined as a symbol in the object.

console.log(JsUser[mySym])

