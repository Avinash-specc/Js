// const tinderUser = new Object() //1st method
const tinderUser = {} //Both have the same meaning and is just to declare.



tinderUser.id= "123abc"
tinderUser.name="Avi"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstName:"Avinash",
            lastName:"Kushwaha"
        }
    }
}

// console.log(regularUser.fullname.userfullname)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1,obj2}// On direct merging it creates object inside a object.

// const obj3 = Object.assign({}, obj1,obj2) //Empty curley braces prevent obj2 to get copied to obj1 it instead helps to create an empty object where both values are copied.
const obj3={...obj1, ...obj2} //Same spreadsheet operator can also be used.

console.log(obj3)
console.log(obj1) 



console.log(tinderUser)
console.log(Object.keys(tinderUser)) //Converts keys of the objects in arrays.
console.log(Object.values(tinderUser))//Converts values of the objects in arrays.
console.log(Object.entries(tinderUser))//Converts all of the key and value pairs in arrays inside an array.

console.log(tinderUser.hasOwnProperty("isLoggedIn"))