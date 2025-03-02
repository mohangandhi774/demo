//FUNCTIONS ARE PREDEFINED FORMULAS USED TO PERFORM SPECIFIC TASK
//IT STARTS WITH() PARENTHESIS

function a(){

    console.log("hello");
    
}
a();

//TYPES

//FUNCTION DECLARATION AND STATEMENT
  
   //HERE WE GIVE FUNCTION NAME WITH PARAMETER AND ARGUMENT

   function f(a){

    console.log("morning");
    
   }
   f(a);

//FUNCTION EXPRESSION 
  
   //HERE THE FUNCTION IS DECLARED WITHIN A VRIABLE

  var a=function g(ab){

   console.log("noon");
   
  } 
  a();

//ANONYMOUS FUCTION

  //HERE THERE IS NO FUNCTION NAME

  var b=function (abc){
   console.log("night");
   
  }
  b();

  //IMMEDIATE INVOKE FUNCTION

  //IT STARTS WITH A CIRCLE PARENTHESIS WITH NO FUNCTION NAME

  (function (bc){
   console.log(bc);
   
  })
  ("invoke");

  //ARROW FUNCTION 

  // IT IS A SINGLE LINE FUNCTION

  let arr=(cd)=>{
   console.log(cd);
   
  }
  arr("arrow");