// singleton
// object.create


//object literals

const mySym = Symbol("Key1")
const JsUser = {
    name:'Aditya',
    "full name" : "Aditya Debanth",
    [mySym] : "mykey1",
    age: 19,
    location:'Kolkata',
    email:"adi@gmail.com",
    isLoggedIn:false
}
console.log(JsUser.email)
console.log(JsUser["email"])
// console.log(JsUser.full name)  not possible
console.log(JsUser["full name"])
console.log(JsUser[mySym])//Important

Object.freeze(JsUser)//After this we cant manipulate any key values....
JsUser.greeting = function(){
    console.log(    "Hello World")
}
console.log(JsUser.greeting())








