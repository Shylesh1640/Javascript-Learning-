//Exceution Concept in JavaScript
//global Execution Context
//function Execution Context

var tickets = 10;
function totalTickets(newtickets) {
    return tickets + newtickets;
}
var result = totalTickets(5);
console.log(result);

//In the above code, when the JavaScript engine starts executing the code, it first creates a Global Execution Context (GEC).
//The GEC contains the global object (window in browsers) and the 'this' keyword, which refers to the global object.
//During the creation phase of the GEC, memory is allocated for variables and functions.
//The variable 'tickets' is initialized with the value 10, and the function 'totalTickets' is stored in memory.
//Once the GEC is created, the code starts executing line by line.
//When the function 'totalTickets' is called with the argument 5, a new Function Execution Context (FEC) is created for that function call.
//The FEC has its own variable object, scope chain, and 'this' value.

//call stack

//lifo-last in first out
//The call stack is a data structure that keeps track of the execution context in JavaScript.
//end the call stack is empty
//When a function is invoked, a new execution context is created and pushed onto the call stack.
//When the function completes its execution, its execution context is popped off the stack, and control returns to the previous context.

