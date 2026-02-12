const marvel_heroes =["Thor","Ironman","Spiderman"]

const dc_heroes = ["Superman", "Flash", "Batman"]

// marvel_heroes.push(dc_heroes) //Instead of merging the arrays dc_heroes is embedded in marvel_heroes as a new array inside of it.

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1]) //Output --> Flash 

// const allHeroes = marvel_heroes.concat(dc_heroes)//Important --> It returns a new array no change in original is done so we'll store it in a new variable.

// console.log(allHeroes)

const all_new_heroes = [...marvel_heroes, ...dc_heroes]

// console.log(all_new_heroes) //... --> spread operator renders same functionality as .concat in js.


const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realUsableArray = anotherArray.flat(Infinity)//In place of infinity depth of the search is given to flat the array

console.log(realUsableArray)

console.log(Array.isArray(anotherArray)) //Outputs boolean value true/false.
console.log(Array.from("Avinash")) //Returns an array converted from the given string.

console.log(Array.from({name:"Avinash"})) //Returns empty array as no information is given to either use key or value to generate an array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) //Converts into Array.