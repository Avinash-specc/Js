// Dates

// let myDate = new Date()
// console.log(myDate.toString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2026,0,23,15,3,2) // Months start from 0 in js {format --> yyyy,mm,dd , hour,minute,second(uses the 24hour format while declaration)}

let myCreatedDate = new Date("2023-01-14")//Another format

// let myCreatedDate = new Date ("01-14-2025")//Expected output--> 01/14/2025 Real output --> 14/1/2025 Use the above declared another format
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(myCreatedDate.getTime()) //Outputs the value in Milli seconds thus dividing the value by 1000 to get it in seconds.
console.log(Math.floor(Date.now()/1000)) 

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())

console.log(newDate.toLocaleString('default', {
    weekday:"short", //Gives options such as short, long, narrow
}))