// IT IS A FUCTION WHICH DELAYS THE EXECUTION OF CODE FOR SPECIFIC AMOUNT OF TIME

//SYNCHRONOUS---IT DOES TASK ONE AFTER ANOTHER
//IT SENDS THE REPLY MESSAGE AND WAIT FOR THE REPONSE THEN EXECUTE THE OTHER

//ASYNCHRONOUS ---IT DOES NOT WAIT FOR ANY REPLY
//IT MOVES TO THE NEXT TASK BEFORE COMPLETION OF THE FIRST


function fruits(){
    setTimeout(() => {
        console.log("apple");
        
    }, 3000);
}

function veg(){
    setTimeout(() => {
        console.log("tomato");
        
    }, 2000);
}
fruits();
veg();