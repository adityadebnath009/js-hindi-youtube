// A function expression can be stored in a variable:
const x = function (a, b) {return a * b};

// After a function expression has been stored in a variable, the variable can be used as a function:
// The function above is actually an anonymous function (a function without a name).
let z = x(4, 3);
console.log(z)
// Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.



function calculateCartPrice(num1)
{
  return num1
}
// Hoisting applies to variable declarations and to function declarations.

// A self-invoking expression is invoked (started) automatically, without being called.

// Function expressions will execute automatically if the expression is followed by ().

// (function () {
//     let x = "Hello!!";  // I will invoke myself
//   })();

//   The function above is actually an anonymous self-invoking function (function without name).

// he typeof operator in JavaScript returns "function" for functions.

// But, JavaScript functions can best be described as objects.

// JavaScript functions have both properties and methods.

// The arguments.length property returns the number of arguments received when the function was invoked:

function myFunction(a, b) {
    return arguments.length;
  }

  function myFunction(a, b) {
    return a*b
  }
  let text = myFunction.toString();




  function calculateCartPrice(var1,var2,...num1)
  {
    return var1,var2,num1
  }
  console.log(calculateCartPrice(200, 400, 500, 2000))
