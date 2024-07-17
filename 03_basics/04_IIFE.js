// IMMEDIATELY INVOKED FUNCTION EXPRESSION

// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();//See the whole func is within parenthesis and followed by empty parenthesis
//Here semicolon is important 

( () => {
    console.log(`DB CONNECTED TWO `);
} )()



( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Hitesh')
