const name = "hitesh"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)//Modern syntax instead of using Concatenation

const gameName = new String('Aditya')

console.log(typeof gameName) //Object
console.log(gameName) //[String:'Aditya']
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)

console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("t"))
console.log(gameName.slice(1, 4)); // dit  ,excluding the fourth position     //Extracts a parts of the string and enter a new string
console.log(gameName.substring(1, 4)); //can't accept tthe negative values



const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)


// trim(): Removes whitespace from both ends of a string.
let spacedStr = '  Hello  ';
console.log(spacedStr.trim()); // Hello

// replace(): Replaces a specified value with another value in a string.
let newStr = gameName.replace('Aditya', 'Hi');
console.log(newStr); // Hi

let str = "I am a good boy"
let words = str.split(' ')
console.log(typeof words) //Returning an Array ,which is a object
console.log(words)  //[ 'I', 'am', 'a', 'good', 'boy' ]


// Template Literals
// Template literals are string literals that allow embedded expressions. You can use multi-line strings and string interpolation with template literals.
let name1 = 'John';
let greeting = `Hello, ${name1}!`;
console.log(greeting); // Hello, John!
