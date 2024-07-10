//Maths Library

console.log(Math.abs(-4))
console.log(Math.round(4.3))
console.log(Math.round(4.6))


console.log(Math.random()) //[0,1)
console.log(Math.random()*10 + 1 ) //[0,1)
console.log(Math.floor(Math.random()*10 + 1 )) //[1,11)

const max = 20
const min = 10

console.log(Math.floor(Math.random()*(max-min+1))  +  min)