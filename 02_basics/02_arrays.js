let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8,9]
//To concatenate arrays
//let arr3 = arr1.concat(arr2)//[1,2,3,4,5,6,7,8,9]
//New way
let arr3 =[...arr1,...arr2]
console.log(arr3)

