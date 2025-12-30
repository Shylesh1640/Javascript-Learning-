//Syntax

// for (initialization; condition; update) {
//    code to be executed
// }

// for ( let i = 0; i < 5; i++ ) {
//     console.log( "Shylesh" );
// }

// for (let j = 1; j <= 10; j++) {
//     console.log(j);
// }

//nested loops

// for (let i=1; i<=5; i++) {
//     console.log("shylesh");
//     for (let j=1; j<=5; j++) {
//         console.log("hello");
//     }
// }

const n = 5;
// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += '* ';
//     }
//     console.log(row);
// }

// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for(let j = 1; j <= n-i ; j++){
//         row +='  ';
//     }
//     for (let k = 1; k <= 2*i-1; k++) {
//         row += '* ';
//     }
//     console.log(row);
// }

//invverted pyramid
for (let i = n; i >= 1; i--) {
    let row = '';   
    for(let j = 1; j <= n-i ; j++){
        row +='  ';
    }
    for (let k = 1; k <= 2*i-1; k++) {
        row += '* ';
    }
    console.log(row);
}