//Callback
//passing a function as an argument to another function

// function starbucks(Callback){
//     console.log("Waiter:Your order Please?");
//     Callback();
// }
// starbucks(customer);
// function customer(){
//     console.log("Customer: white mocha");
// }

//important note: Callback function is not invoked when passed as an argument // for interview purpose

//setTimeout

// setTimeout(function biriyanni(){
//     console.log("biriyani is served");
// }, 3000)

//best way to do is in arrow function
// console.log("Bringing menu please wait...");
// setTimeout(() => {
//     console.log("fried rice is served");
// }, 5000);

//setInterval

//best example to understand setInterval is a clock

const water = setInterval(() => {
    console.log("Drink water");
    
},5000);

//to stop setInterval we use clearInterval
setTimeout(() => clearInterval(water),20000);