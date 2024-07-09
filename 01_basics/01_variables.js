const accountId = 1233455
let accountEmail = "example@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState


console.log(accountId)
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




