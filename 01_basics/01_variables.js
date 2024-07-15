const accountId = 1233455
let accountEmail = "example@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState
accountId = 24325353;
// The const keyword does not make the variable immutable, but it prevents re-assignment. If the const variable holds an object, the properties of that object can still be changed.
// Use const when you need to declare a variable that you don’t want to be reassigned after its initial value is set.

console.log(accountId)
//Use this when you want to print multuple things
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

accountCity="Bengaluru"
accountPassword ="424763"
accountEmail = "aditya@gmail.com"



/*
Prefer not to use var
beacause of issue in block scope and functional scope
 */

console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])




