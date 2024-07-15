console.log("2">1)
console.log("02">1)

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

// The reason is that an equality check ==  and compariosn > < >=  <= works differently.
// Comparisons convert null to a number, treating it as a zero.
// Thats why (6) null>=0 is true and (4) null > 0 is false.

console.log(undefined==0)
console.log(null > 0)
console.log(null >= 0)//Always results as false even if you do any other comparison
console.log(null == undefined);//true
console.log(null === undefined);//false



// Strict Equality (===): No type conversion is performed. Both the value and the type must be the same for the comparison to return true.
// Loose Equality (==): Type conversion is performed if necessary. The values are converted to a common type before being compared.



// ===
