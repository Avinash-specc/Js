// console.log(2>1)
// console.log(3>4)


// console.log("2">1)
// console.log("02">1)  // While  comparsion always make sure to compare the same data type for a predictable result.

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0) // true because equality check(==) and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.That's why (3) null >= 0 is true and (1) null > 0 is false.
console.log(null == 0)

// console.log(undefined == 0) // False for all cases.
// console.log(undefined>0)

console.log("2" === 2)  // === equality check checks strictly both value and data type.