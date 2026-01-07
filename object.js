// let singam = {
//     hero: "suriya",
//     heroine: "Anushka",
//     comedian: "Vivek",
//     villain: "Prakash Raj",
//     year: 2010
// };
// console.log(singam);
// console.log(singam.hero);
// console.log(singam['heroine']);


// let restaurant = {};
// let restaurant = new Object();

// restaurant.name = "Bistro Cafe";
// restaurant.location = "MG Road";
// restaurant.cuisine = "Italian";
// console.log(restaurant);

// let product = {
//     brand: "Apple",
//     model: "iPhone 17 Pro",
//     price: 150000,
//     spec:{
//         variant: "512GB",
//         color: "Silver",
//     }
// }

// console.log(product.spec.color);


let arunchalam = {
    hero: "Vijayakanth",
    heroine: "Meena",
    villain: "Radha Ravi",
    dialogue : function(){
        console.log("Ennamma Ippadi Panreengale ma?");//return : "What are you doing like this?"
    }
};
console.log(Object.keys(arunchalam));
console.log(Object.values(arunchalam));
arunchalam.dialogue();