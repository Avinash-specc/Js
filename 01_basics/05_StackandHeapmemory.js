//Stack (Primitive), Heap (Non-Primitive)

let myYoutubename ="11th Punches"
let anotherName = myYoutubename
anotherName ="Avinash Kushwaha"
console.log(myYoutubename)
console.log(anotherName)

let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "avinash@google.com"

console.log(userOne.email)
console.log(userTwo.email)