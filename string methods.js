//these are functions that opearates on string and these methods are called by pplacing a dot after the string

//length

//It is used to find the length of the string

let a="mohan";
console.log(a.length);

//toUppercase()

//it is used to convert letters to capital

let upp="mohan";
console.log(upp.toUpperCase());

//toLowerCase()

//it is used to convert letters to small

let low="GANDHI";
console.log(low.toLowerCase());

//charAt()

// it is used to find the character by using index

let ind="welcome";
console.log(ind.charAt(3));

//indexof()

//returns the index from the first occurence of the string

let inde="chennai";
console.log(inde.indexOf("n"));

//lastindexof()

//return the index from the last occurence of the string

let last="chennai";
console.log(last.lastIndexOf("n"));

//slice()

//it is used to extract a section from the string

let sl="good";
console.log(sl.slice(1));

//substring()

//it is used to take a particular character from the string

let sub="welcome";
console.log(sub.substring(3,6));

//trim()

// it is used to remove empty space in te string

let tr="  mohan  ";
console.log(tr.trim());

//replace()

//it is used to replace a character with the other

let re="mohan ";
console.log(re.replace("mohan","Money"));

//replaceof()

//it is used to replace a particular word in whole string

let rep="mohan money";
console.log(rep.replaceAll("m","M"));

//concat()

  //it is used to add two or more trings

  let con="hi";
  console.log(con.concat("hello"));

//startswith()

//check wether the first letter starts with the same

let sta="mohan";
console.log(sta.startsWith("m"));

//endswith()

//check wether the last letter ends with same

let las="mohan";
console.log(las.endsWith("n"));

//include()

//checks the given character i inside the string

let inc="gdhh";
console.log(inc.includes("a"));

//split()

//it is used to split the string in to substring

let spl="gandhi";
//console.log(spl.split("a"));
console.log(spl.split("a").join("a"));










