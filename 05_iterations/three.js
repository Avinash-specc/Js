// for of

const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hello world!"

for(const greet of greetings){
    if (greet == " "){
        continue;
    }
    console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map() //Maps are the key-value pairs only possessing uniques doesn't include duplicate values.
map.set('IN', "India",)
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN', "India",)

console.log(map)

// for(const key of map){
//     console.log(key)
// }  // Prints the key:value pairs in the form of arrays.

for(const [key, value] of map){
    console.log(key, ":-", value);
} // When we use square notation it destructures the map to print the required value.

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for(const [key,value] of myObject){
    console.log(key,":-", value)
}