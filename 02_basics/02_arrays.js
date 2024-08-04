let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8,9]
//To concatenate arrays
//let arr3 = arr1.concat(arr2)//[1,2,3,4,5,6,7,8,9]
//New way
let arr3 =[...arr1,...arr2]
console.log(arr3)


// Note that as with sort(), reverse() mutates the original array and returns it back.
//To convert an string into an array we use str.split(argument)

//length ,indexOf ,slice ,includes ,join are common methods in both String and array

