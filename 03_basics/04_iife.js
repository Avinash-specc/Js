//Immediately Invoked Function Expressions(IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();//Prevents the pollution from global scope and executes it immediately.To do so, whole function is wrapped in a parenthesis. Always use semicolon at the end of each iife to use another iife later in the code.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('Avinash')