//IT IS A OBJECT REPRESENTATION OF COMPLETION OR FAILURRE OF AN ASYNCHRONOUS FUNCTION

function chennai(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("yellow army")
        }, 4000);
    })
}
function mumbai(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("bleed blue")
        }, 6000);
    })
}
function bangalore(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("esala cup namde")
        }, 3000);
    })
}

chennai()
     .catch(ipl=>{console.log(ipl);return mumbai()})
     .then(ipl=>{console.log(ipl);return bangalore()})
     .then(ipl=>{console.log(ipl);console.log("2025");
     
     })
     