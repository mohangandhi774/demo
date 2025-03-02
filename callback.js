//It is a synchoronous function
//It completes task one after the another

function lion(callback){
    setTimeout(() => {
        console.log("dangerous animal");
        callback();
    }, 6000);
}

function cheetah(callback){
     setTimeout(() => {
        console.log("fastest animal");
        
        
     }, 5000);
}
lion(cheetah);
