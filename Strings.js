let heading = "Names";
//let heading = "Ingredients";
let myListHeading = `List of ${heading}`;
/*
let listMembers = ["baking powder", "Cheese", "Almond", "Flour", "Nuts"];
*/

let listMembers = [
  "Sadeed",
  "Suze",
  "Jonathan",
  "Suzan",
  "Sadeed",
  "Suze",
  "Jonathan",
  "Suzan",
  "Sadeed",
  "Suze",
  "Jonathan",
  "Suzan",
  "Sadeed",
  "Suze",
  "Jonathan",
  "Suzan",
  "Sadeed",
  "Suze",
  "Jonathan",
  "Suzan",
  "Sadeed",
  "Suze",
  "Jonathan",
  "Suzan",
  "Sadeed",
  "Suze",
  "Jonathan",
  "Suzan",
  "Sadeed",
  "Suze",
  "Jonathan",
  "Charlaine",
  "Syed",
  "Salah",
];

let x = listMembers.length - 1;

//console.log(listMembers[x]);
//console.log();

//console.log(listMembers[listMembers.length - 1]);
//console.log(listMembers.length);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);

fruits.push("Kiwi");
console.log(fruits);

let myFruitString = fruits.toString();
console.log(myFruitString);

let myFruitStringSplit = myFruitString.split(",");
console.log(myFruitStringSplit);
//document.getElementById("demo").innerHTML = fruits.toString();

let myNamesString = "Sadeed|Hamilton|sadeed@gmail.com|6479397860";
console.log(myNamesString);

let myNamesArray = myNamesString.split("|");
console.log(myNamesArray);

const person = {
  firstName: "John",
  City: "Hamilton",
  email: "sadeed@abc.com",
  phone: "6479397860",
};

console.log(person);

console.log(person.firstName);
console.log(person.City);
console.log(person.phone);

//console.log(listMembers.sort());

let html = `<h1>${myListHeading}</h1> <ul> `;

for (const x in listMembers) {
  html += `<li>${listMembers[x]}</li>`;
}

html += `</ul>`;

document.getElementById("demo").innerHTML = html;

/*
<h2>${myvar1}</h2>
    <ul>
      
    <li>${names[0]}</li>
      
    </ul>
*/

/*
let greeting = "Good Morning";

console.log(`${greeting} Sadeed`);
*/
/*
let mySampleString = "Quick brown fox jumps over the lazy dog";

let myStringCount = mySampleString.length;
document.getElementById("demo").innerHTML = mySampleString.toUpperCase();

let firstName = "Sadeed ";
let lastName = "Rocker";
//document.getElementById("demo").innerHTML = firstName + lastName;
let fullName = "";



document.getElementById("demo").innerHTML = fullName.concat(
  firstName,
  lastName
);
*/
//let x = "John";
//let y = "John";
/*
let x = new String("John");
let y = new String("John");

console.log(typeof x);
console.log(typeof y);

if (x === y) {
  console.log("X and Y matched");
} else {
  console.log("X and Y didn't matched");
}
*/