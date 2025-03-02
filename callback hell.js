//IT IS USED WHEN MULTIPLE FUNCTIONS ARE USED

function indhu(callback){
    setTimeout(() => {
        console.log("mental");
        callback();
    }, 4000);
}
function mathi(callback){
    setTimeout(() => {
        console.log("loose");
        callback();
    }, 3000);
}
function madhu(callback){
    setTimeout(() => {
        console.log("arivali");
        callback();
        
    }, 2000);
}
function aparna(callback){
    setTimeout(() => {
        console.log("pasakarii");
        callback();
    }, 3000);
}
indhu(()=>{
      mathi(()=>{
        madhu(()=>{
            aparna(()=>{console.log("nan");
            })
        })
      })
})