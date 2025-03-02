function india(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const win=false
            if(win)
            {
                resolve("rohit");
            }
            else{
                reject("virat");
            }
        }, 3000);
    })
}
function assuie(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const loss=false
            if(loss)
            {
                resolve("smith");
            }
            else{
                reject("head");
            }
        }, 4000);
    })
}
function kiwis(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const draw=true
            if(true)
            {
                resolve("kane mama");
            }
            else{
                reject("philips");
            }
        }, 7000);
    })
}

india()
      .catch(champions1=>{console.log(champions1);return assuie()})
      .catch(champions2=>{console.log(champions2);return kiwis()})
      .catch(champions3=>{console.log(champions3);console.log("underdogs")})