const user = {
    username:"Avinash",
    loginCount : 8,
    signedIn:true,

    getUserDetails: function(){
        console.log("Got user details from database")
        console.log(`Username: ${this.username}`) //This is used to refer to the current object from which it is called or refered to.
        // console.log(this)
    }
}

// console.log(user["username"])
// console.log(user.getUserDetails())
// console.log(this)

// const promiseOne = new Promise()
// const date = new Date()

function User(username,loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // return this // without this as well new object will be created implicitly with new keyword. new keyword calls a constructor function

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
}

const userOne = new User("Avinash",12,true)
const userTwo = new User("Chai aur code",11, false)
console.log(userOne.constructor)
console.log(userTwo)

//Learn about instanceof