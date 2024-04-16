/*
function add(a, b) {
  return a + b;
}
*/
//document.getElementById("demo").innerHTML = result;

/*
add = function (a, b) {
  return a + b;
};

console.log(65 + add(20, 3));
*/

/*

add = (a, b) => {
  return a + b;
};

console.log(75 + add(20, 3));
*/
/*
add = (a, b) => a + b;

console.log(55 + add(20, 3));
*/
/*
greeting = (name) => "Welcome " + name;

document.getElementById("myHeading").innerHTML = greeting("Sadeed");
*/

//Without Map
/*
const numbers = [2, 4, 6, 7, 9];

const doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
}

console.log(doubleNumbers);
*/

//With Map
/*
const numbers = [2, 4, 6, 7, 9];

const doubleNumbers = numbers.map((number) => number * 2);

console.log(doubleNumbers);
*/
//With Map
/*
greeting = (name) => "Welcome " + name;

console.log(greeting("Suzan"));

const studentNames = ["Sadeed", "Amber", "Suzan", "Syed"];
const welcomeMSGNames = studentNames.map(greeting);

console.log(welcomeMSGNames);
*/

/*
const studentNames = ["Sadeed", "Amber", "Suzan", "Syed"];
const upperStudentNames = [];

for (let i = 0; i < studentNames.length; i++) {
  upperStudentNames.push(studentNames[i].toUpperCase());
}

console.log(upperStudentNames);
*/
//With Map
/*

const names = ["Sadeed", "Amber", "Suzan", "Syed"];
const upperStudentNames = names.map((name) => name.toUpperCase());

console.log(upperStudentNames);
*/

//Object Mapping
//Without Map
/*
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Doe" },
];

const userIds = [];
for (let i = 0; i < users.length; i++) {
  userIds.push(users[i].id);
}
console.log(userIds);
*/
//With Map
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Doe" },
  ];
  const userIds = users.map((user) => user.id);
  const useNames = users.map((user) => user.name);
  
  console.log(userIds);
  console.log(useNames);