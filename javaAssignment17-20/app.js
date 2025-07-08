// // 1. Declare and initialize an empty multidimensional array. 
// var matrix = [];
// // 2. Declare and initialize a multidimensional array  representing the following matrix
// matrix = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1]
// ];

// console.log(matrix)
// //3. Write a program to print numeric counting from 1 to 10

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

// //4. Write a program to print multiplication table of any 
// // number using for loop.Table number & length should be  taken as an input from user.

// var table = parseInt(prompt('Enter The Table Number'));
// var tableLength = parseInt(prompt('Enter The length of The Table '))

// for (var i = 1; i <= tableLength; i++) {
//   console.log(table + ' x ' + i + ' = ' + (table * i))
// }


// // 5. Write a program to print items of the following array  using for loop: 
// // fruits = [“apple”, “banana”, “mango”, “orange”,  “strawberry”]
// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];


// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// };

// document.write('Element at index ' + i + ' is ' + fruits[i] + '<br>');
// document.write('Element at index ' + i + ' is ' + fruits[i] + '<br>');
// document.write('Element at index ' + i + ' is ' + fruits[i] + '<br>');
// document.write('Element at index ' + i + ' is ' + fruits[i] + '<br>');
// document.write('Element at index ' + i + ' is ' + fruits[i] + '<br>');
// document.write('Element at index ' + i + ' is ' + fruits[i] + '<br>');


// // 6. Generate the following series in your browser. See  example output. 
// // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k




// document.write('<h1> Counting : </h1>');

// for (var i = 1; i <= 15; i++) {
//   document.write(i, ',');

// }

// document.write('<h1> Reverse counting: </h1>');

// for (var i = 10; i >= 1; i++) {
//   document.write(i, ',');

// }

// document.write('<h1> Even:  </h1>');

// for (var i = 0; i <= 20; i += 2) {
//   document.write(i, ',');

// }

// document.write('<h1>  Odd:  </h1>');

// for (var i = 1; i < 20; i += 2) {
//   document.write(i, ',');

// }

// document.write('<h1> Series:  </h1>');

// for (var i = 1; i <= 20; i++) {
//   document.write(i + 'k', ',');

// }


// 7. You have an array 
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an  array. 
// After searching, prompt the user whether the given item is found in the list or not. Example:

// var bakeryItems = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var userInput = prompt('Welcome To My Bakery! What do you want to order sir/ma\'am?').toLowerCase();

// var found = false;

// for (var i = 0; i < bakeryItems.length; i++) {
//   if (bakeryItems[i].toLowerCase() === userInput) {
//     document.write('<h2>' + userInput + ' is <span style="color:black">available</span> at index ' + i + '</h2>');
//     found = true;
//     break;
//   }
// }

// if (!found) {
//   document.write('<h2>' + userInput + ' is <span style="color:red">unavailable</span> in our bakery</h2>');
// }

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

var num1 = [24, 53, 78, 91, 12];
var largestNumber = num1[0];

for (var i = 1; i < num1.length; i++) {
  if (num1[i] > largestNumber) {
    largestNumber = num1[i];
  }
}
document.write('<h2>Arry Items : ' + num1 + '</h2>');

document.write('<h2>The Largest number is: ' + largestNumber + '</h2>');

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

var num2 = [24, 53, 78, 91, 12];
var smallestNumber = num2[0];

for (var i = 1; i < num2.length; i++) {
  if (num2[i] < smallestNumber) {
    smallestNumber = num2[i];
  }
}
document.write('<h2>Arry Items : ' + num2 + '</h2>');

document.write('<h2>The Smallest number is: ' + smallestNumber + '</h2>');

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
var multiplesOfFive = [];
for (var i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    multiplesOfFive.push(i);
    document.write(i + ',');
  }
}
