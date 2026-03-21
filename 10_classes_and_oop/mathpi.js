const Descriptor  = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(Descriptor)

// console.log(Math.PI)
// Math.PI = 5 //It will not work since the value of PI is constant and is hardcoded inside the language.
// console.log(Math.PI)

const chai = {
    name:'ginger chai',
    price:'250',
    isAvailable:true,
    orderChai:function(){
        console.log("Chai nhi bani")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false, //Hides data while iterating but can be accessed directly

})
// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (const [key,value] of Object.entries(chai)) { 
    if(typeof value != 'function'){
    console.log(`${key}:${value}`)
    }
}