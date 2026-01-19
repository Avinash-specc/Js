// let a = 300
// if(true){
//     let a = 10
//     const b =20
//     var c = 30
//     console.log("Inner: ",a)
// }
// console.log(a)
// // console.log(b)
// console.log(c)

function one(){
    const username = "Avinash"
    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website) //It will give error as website is in local scope
    two()
}

// one()

if(true){
    const username ="Avinash"
    if(username === "Avinash"){
        const website = " youtube"
        // console.log(username+website)
    }
    // console.log(website) //Not in the scope
}


// console.log(username) //Not in the scope

//++++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++

console.log(addone(5)) //It can access before declaration of the function

function addone(num){
    return num+1
}

addTwo(5) //It can't access before declaration of the function.It's all depends on how the function is declared.
const addTwo = function(num){
    return num+2
}