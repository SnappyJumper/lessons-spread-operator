/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1; //the properties of arr2 will match arr1 and vice versa
arr2.push(4);
console.log("Second array:", arr2);
console.log("First array:", arr1);

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3]; /*the properties of arr4 will be a copy of arr3 but arr3
will remain uneffected by any changes to arr4 afterwards*/

arr4.push(7);
console.log("Third array:", arr3);
console.log("Fourth array:", arr4);

// Copying an object
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = {...obj1, d: 4 }; //adds a property
let obj3 = {...obj1, b: 5 } //replaces a property with a new value

console.log("First object:", obj1);
console.log("Second object:", obj2);
console.log("Third object:", obj3);

// Copying only part of an array/object
let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];
console.log(arr5);
