//push

//it is used to add a value at the last

let a=[1,2,3,4,5];
a.push(6);
console.log(a);

//pop

//it is used to delete a value at the last

let b=[1,2,3,4,5];
b.pop();
console.log(b);

//shift

//it is used to delete a value at the first

let c=["mohan","gandhi","indhu"];
c.shift();
console.log(c);

//unshift

//it is used to add a value at the first

let d=["mohan","gandhi"];
d.unshift("indhu");
console.log(d);

//sort

//it is used to sort the string in alphabetical order

let e=["a","g","e","m","v","k","i"];
console.log(e.sort());

//reverse
//it is used to revere the string 
//it follows  split->>>reverse--->join

let rev="mohan";
console.log(rev.split("").reverse("").join());
