const user = {
    username:"Avinash",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

console.log(this) //Shows empty braces as we are in the node environment.

// function chai(){
//     let username= "Avinash"
//     console.log(this.username)
// }

// chai()

const chai = () => {
    let username = "Avinash" //Arrow function
    console.log(this.username)
}

chai()

// const addTwo = (num1,num2) =>{
//     return num1+num2
// }

const addTwo = (num1,num2) => num1+num2 //Implicit return thus no need to write return or use curley braces when the value to be returned is in single line.
console.log(addTwo(23,4))

// const myArray = [2,3,4,5,6,7]

// myArray.forEach()