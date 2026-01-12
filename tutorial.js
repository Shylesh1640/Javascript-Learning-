// let tv = {
//     brand : "Sony",
//     size : "100 inches"
// }

// let convertedstring = JSON.stringify(tv);

// console.log(convertedstring)

// let tv1 = `{
//     "brand": "Sony",
//     "size": "100 inches"
// }`;

// let convertedobj = JSON.parse(tv1);

// console.log(convertedobj)

//Shallow Copy

//it copies the first level only

// let food = {
//     name : "Mandi",
//     price : 180,
//     quantity : "quarter",
//     flavour :{
//         one : "peri-peri",
//         two : "honey-garlic"
//     }
// }
// let icecream ={
//     name : "Arun icecream",
//     flavour : "chocolate"
// }

// let merged = Object.assign({}, food, icecream);

// let copy= Object.assign({}, food);
// copy.flavour.one = "BBQ";
// copy.price = 200;

// console.log(copy)
// console.log(food)
// console.log(merged)

//Deep Copy

// let jaibheem ={
//     hero : "Surya",
//     supporting : {
//         one : "Arun",
//         two : "Vijay"
//     }
// }

// let copy = JSON.parse(JSON.stringify(jaibheem));
// console.log(copy)
// copy.supporting.two = "Raju";
// console.log(copy)
// console.log(jaibheem)

//Spread Operator

// let original = [1,2,3,4,5];

// let copy = [...original];

// console.log(original === copy);
// console.log(copy);

// let original2 = [6,7,8,9,10];

// let merged = [...original, ...original2];
// console.log(merged);

// let str = "Hello";
// let chars = [...str];
// console.log(chars);

//Rest Operator

function phonepe(first, ...balance){
    console.log(`youtr balance is ${first} and loan is ${balance}`); 
}
phonepe(1000, 5000, 2000, 3000, 4000, 6000);