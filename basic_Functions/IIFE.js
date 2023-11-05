// IIFE
(function hai(){
    //named IIFE
    console.log("IIFE")
})(); // semicolon to stop context flow
// to get rid of global scope pollution

(  (name)=>{
    console.log(`Hello ${name}`)
})('Junaid')

// Javascript Execution Context
//  1: global execution context
//  2: function execution context
//  3: eval execution context

// in Global Execution Context referred to and  this refers to window object

// so these are 2 phases of execution context of js code
// 1: Memory creation phase
//   - so in memory creation phase all the variables and functions are stored in memory
//   - all the variables are set to undefined
//   - all the functions definition are stored in memory
// 2: execution phase
//   - so in execution phase all the variables are assigned values
//   - all the functions are called
//         - so when a function is called a new execution context is created
//         - so this function execution context is pushed to the call stack
//         - and then the function is executed
//         - and then the function execution context is popped out of the call stack
//         - and then the execution context is destroyed
//         - new variable enviroment + execution thread is created
//         - creation phase and execution phase is repeated for this sandbox

//   - so in execution phase the code is executed line by line

