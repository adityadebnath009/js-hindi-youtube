const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Aditya"
tinderUser.isLoggedIn = false
//console.log(tinderUser)


const regular = 
{
    email:"omg@outlook.com",
    fullname:{
        userfullname:{
            firstname:"Aditya",
            lastname:"Debnath"
        }
    }
}
console.log(regular.fullname.userfullname.firstname)


const obj1 = {1:"A",2:"B"}
const obj2 = {3:"C",4:"D"}

//const obj3 ={ obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(obj3))


console.log(tinderUser.hasOwnProperty('isLoggedIn'))