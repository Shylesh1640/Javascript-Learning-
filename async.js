//Async

//await-async


tickets = false;

function queue(){
    return new Promise((resolve,reject) => {
        if (tickets){
            resolve("FDFS");
        }
        else{
            reject("No Tickets Available");
        }
    })
}

async function buytickts(){
    try{
    let result = await queue();
    console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
buytickts();
