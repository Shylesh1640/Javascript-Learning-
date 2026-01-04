//Exceution Concept in JavaScript
//global Execution Context
//function Execution Context

var tickets = 10;
function totalTickets(newtickets) {
    return tickets + newtickets;
}
var result = totalTickets(5);
console.log(result);