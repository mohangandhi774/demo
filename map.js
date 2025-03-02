//MAP HOLDS KEY VALUE PAIR

//MAP

let score=[1,3,5,7];
let add=score.map((v,i,a)=>a+1);
console.log(add);

//REDUCE

let app=[4,6,8,10];
let star=app.reduce((ac,e)=>ac*e);
console.log(star);


//FILTER

let disney=[10,20,30,40,90];
let happy=disney.filter((value,index,actual)=>value<=100);
console.log(happy);
