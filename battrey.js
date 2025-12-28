let batterylevel = 6;

do{
    console.log(`battery charging ${batterylevel}%`);
    batterylevel +=1;
} while(batterylevel < 100);

console.log("Battery fully charged!");