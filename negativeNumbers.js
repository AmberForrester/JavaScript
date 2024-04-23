const numbers = [1, -2, 3, -4, 5, -6]; 

const positiveNumbers = numbers.map(num => num)
                               .filter(num => num >= 0);

console.log(positiveNumbers);

//Using filter() alone would work: 
//const positiveNumbers = numbers.filter(num => num >= 0);