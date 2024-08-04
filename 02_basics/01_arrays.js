// Array

const myArr = [0,1,2,3,4,5]
//10 + {}
//'10[object Object]'


const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[1])

console.log(myArr.push(7))
myArr.pop()


myArr.unshift(9)//Insert an elemnent to the first
console.log(myArr)

myArr.shift()//remove the first element
console.log(myArr)

const newArr = myArr.join()//Covert it to string
console.log(newArr)



// Never use the delete method directly to delte elements  ,it will make undefined holes in the array instead use pop() and shift() method
//The splice() method adds new items to an array.Alternate way to use this method is to delete array elements

const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.splice(2, 0, "Lemon", "Kiwi"); //["Banana", "Orange","Lemon","Kiwi", "Apple", "Mango"]
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// One shortcome is that it will modified the original array
//To overcome this problem...............




//the Array toSpliced() method as a safe way to splice an array without altering the original array by creating a new Array
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);//[ "Feb", "Mar", "Apr"]



//use splice() to remove elements without leaving "holes" in the array:

fruits.splice(0, 1);// ["Orange", "Apple", "Mango"];




// The slice() method slices out a piece of an array.Returns a new array.
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array
// If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.
const citrus = fruits.slice(1);//["Orange", "Apple", "Mango"]                       //Take only two arguments [ , )
const citrus1 = fruits.slice(1,3) //["Orange","Lemon"]




//New way to concatenate an array instead using concat() method.
 const arr1 = [1,2,3,4,5,6]
 const arr2 = [7,8,9,10]
 const arr3 = [11,12,13,14,15]
 const arr4 = [...arr1,...arr2,...arr3]
 console.log(arr4)


//To convert a multi-dimensional array into a single dimension, use a flat method

 const another_arr = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
 const real_another_arr = another_arr.flat(Infinity)//[1,2,3,4,5,6,7,8,9,10,11]



 //Array.isArray() checks if the passed value is an Array.
 console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray('[]'));
// Expected output: false

console.log(Array.isArray(new Array(5)));//Create an array of length 5
// Expected output: true

console.log(Array.isArray(new Int16Array([15, 33])));
// Expected output: false


 //Array.from()
 console.log(Array.from('foo'));//['f','o','o']
 console.log(Array.from({name:'foo'}))//[]    //Interesting
 let score1 = 100
 let score2 = 200
 let score3 = 300
 console.log(Array.from(score1,score2,score3))
 console.log(Array.of(score1,score2,score3))

//Array.of is used to create an array from a list of arguments(even if a singlr argument is passed)
//Array.from is used to create an array from an array-like or iterable object.(string,array,set,map,multiple arguments)Array.from('Aditya')
//Throws error Array.from(124)
//Not an issue  Array.of(124)  //[124]


const courses = ["HTML", "CSS", "Javascript"];
console.log("Using Array.isArray() method: ", Array.isArray(courses))
console.log("Using instanceof method: ", courses instanceof Array)//objectName instanceof ObjectType
//The return value of fill() is the filled array. Note that fill() mutates the original array.


//For instance, new Array(5) would NOT create the array [5] but rather an array whose length is 5, comprised of 5 empty slots.
