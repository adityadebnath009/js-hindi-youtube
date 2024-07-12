// Array

const myArr = [0,1,2,3,4,5]



const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[1])

console.log(myArr.push(7))
myArr.pop()


myArr.unshift(9)//Insert an elemnent to the first
console.log(myArr)

myArr.shift()//remove the first element
console.log(myArr)

const newArr = myArr.join()
console.log(newArr)



// Never use the delete method directly to delte elements  ,it will make undefined holes in the array instead use pop() and shift() method
//The splice() method adds new items to an array.Alternate way to use this method is to delete array elements

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); //["Banana", "Orange","Lemon","Kiwi", "Apple", "Mango"]
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// One shortcome is that it will modified the original array
//To overcome this problem...............
//use splice() to remove elements without leaving "holes" in the array:

fruits.splice(0, 1);// ["Orange", "Apple", "Mango"];




//the Array toSpliced() method as a safe way to splice an array without altering the original array by creating a new Array
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);//[ "Feb", "Mar", "Apr"]



// The slice() method slices out a piece of an array.Returns a new array.
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array
// If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.
const citrus = fruits.slice(1);//["Orange", "Apple", "Mango"]                       //Take only two arguments [ , )
const citrus1 = fruits.slice(1,3) //["Orange","Lemon"]
