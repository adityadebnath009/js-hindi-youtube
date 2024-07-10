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



// ===
