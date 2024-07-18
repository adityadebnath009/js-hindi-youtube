// ++++++++++++++++++++JavaScript Execution Process++++++++++++++++++++++++++
// From `'Chai aur Code'`  and  `Code Freecamp`

//Call Stack
function firstFunction() {
    console.log('Inside firstFunction');
    secondFunction();
    console.log('Back to firstFunction');
  }
  
  function secondFunction() {
    console.log('Inside secondFunction');
    thirdFunction();
    console.log('Back to secondFunction');
  }
  
  function thirdFunction() {
    console.log('Inside thirdFunction');
  }
  
  firstFunction();







// +++++++Execution Process++++++
// Initial state:

// Call stack is empty.
// >>Calling firstFunction:

// firstFunction is added to the call stack.
// Call stack: [firstFunction]
// Logs: Inside firstFunction
// Calling secondFunction from firstFunction:

// secondFunction is added to the call stack.
// Call stack: [firstFunction, secondFunction]
// Logs: Inside secondFunction
// Calling thirdFunction from secondFunction:

// thirdFunction is added to the call stack.
// Call stack: [firstFunction, secondFunction, thirdFunction]
// Logs: Inside thirdFunction
// thirdFunction returns:

// thirdFunction is removed from the call stack.
// Call stack: [firstFunction, secondFunction]
// Logs: (no logs for return)
// Back to secondFunction:

// Logs: Back to secondFunction
// secondFunction returns:

// secondFunction is removed from the call stack.
// Call stack: [firstFunction]
// Logs: (no logs for return)
// Back to firstFunction:

// Logs: Back to firstFunction
// firstFunction returns:

// firstFunction is removed from the call stack.
// Call stack: []
// Logs: (no logs for return)