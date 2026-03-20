// let myName = "Avinash    "

// console.log(myName.trueLength)



let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}
Object.prototype.avinash = function(){
    console.log(`Avinash is present in all objects`)
}

Array.prototype.heyAvi = function(){
    console.log(`Hello Avi`)
}
// heroPower.avinash()

myHeros.avinash()
myHeros.heyAvi()
// heroPower.heyAvi() //when passed to an array object can't access it but if it is passed to an object each components have it's access

//inheritance

const User = {
    name:"Chai",
    email:"chai@google.com"
}

const Teacher = {
    makeVideo: true,

}

const TeachingSupport = {
    isAvailable:false,

}

const TASupport = {
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User


//Modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)
console.log(Teacher) //Still shows the predefined keyvalue pairs howevers new data can be accessed using forinloops as they are connected by prototypes

let anotherUserName= "ChaiAurCode     "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUserName.trueLength()

"Avinash    ".trueLength()

function print(){
    console.log(this)
}
