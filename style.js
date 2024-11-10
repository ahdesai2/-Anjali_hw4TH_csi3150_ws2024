/*Q1 */
function questionone() {
  console.log(myVariable); 
  var myVariable = 2;
  console.log(myVariable); 
}
function questionone() {
  if (true) {
    let myVariable = 2;
    console.log(myVariable); 
  }
  console.log(myVariable); 
}
function questionone() {
  const myVariable = 2;
  console.log(myVariable); 
  myVariable = 6; 
}
/*  Q2 */  /* credit for example goes to : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics */
 const person = {
  name: ["Hannah", "Jonhson"],
  age: 31,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
/*This is a object literal in javascript */

/*The next is json object litereral */

{
  "title"; "JavaScript Essentials",
  "author"; "Hannah Johnson",
  "year"; 2024
}

/*Object destructuring */

const user = {
  username: "hannah_j",
  email: "hannah@example.comj",
  location: "America"
};


const { username, email } = user;

console.log(username); 
console.log(email);    
  

