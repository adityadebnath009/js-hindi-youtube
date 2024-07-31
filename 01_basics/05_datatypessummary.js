/*Primitives---->
7 types : Strings, NUmber ,Boolean ,null ,undefined ,Symbol ,BigInt*/

// JavaScript is a dynamically typed language.
// This means that:
// Type checking happens at runtime:
// The type of a variable is determined when the code is executed, not when it's written.
// Variables can hold values of different types:
// You can assign a number to a variable, and later assign a string to the same variable without any issues.

//JavaScript try to convert strings to number in all numeric operations.
const Id =Symbol("123")
const anotherId = Symbol("123")
console.log(typeof anotherId)//Type--Symbol

console.log(Id == anotherId)//It will result as false


const bigNumber = 34567827738927739n //adding a 'n' to the last makes the variable bigInt
console.log(typeof bigNumber)



//Reference (Non-Primitive)
//Array ,Objects ,Functions


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++===============================================


//Stack (Primitive) , Heap(Non-Primitive)




let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
console.log(anothername)

anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername)



let userOne = {
    email:"user@gmail.com",
    upi  : "6917319731"
}
 
console.log(userOne)
let userTwo = userOne //

userTwo.email = "aditya@gmail.com"

console.log(userOne)
console.log(userTwo)


              





