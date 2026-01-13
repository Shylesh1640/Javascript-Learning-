//promise - resolve or reject 

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

function buytickts(){
    queue()
    .then((message) =>{
        console.log(message);
    })
    .catch((error) =>{
        console.log(error);
    });
}
buytickts();