// function sayMyName () {
//     console.log("Avinash")
// }

// sayMyName()

// function addTwoNumbers(number1 , number2){
//     console.log(number1+number2)
// }

function addTwoNumbers(number1 , number2){
    // let result = number1+number2
    // return result

    return number1+number2
}

const result = addTwoNumbers(3,5)

// console.log("result : ",result)

function loginUserMessage(username = "Avi "){ //Avi is default message here.
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in` 
}

// console.log(loginUserMessage())

function calculateCartPrice ( val1, val2,...num1){ //...num1 is rest operator here which organizes it into an array.
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username:"Avinash",
    price: 199

}

function handleObject(anyObject){
    console.log(`Username is : ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username :"Avinash",
    price:399
})

// const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([200,400,500,1000]))