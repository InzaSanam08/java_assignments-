// Assignment 3

// VARIABLES FOR NUMBERS



// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.     

var myAge = 16;
alert("Iam " + myAge + "  years old");


// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

alert("you have visited this site 14 time ")



// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:


var birthDay = '2008';
document.write("My birth year is: " + birthDay);

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorName = "Inza Sanam";
var productTitile = "xyz";
var quantity = 3;

document.write(visitorName + " ordered " + quantity + " " + productTitile + " on XYZ Clothing store.");







// ////////////////////////////////////////////      Done





// Assignment 4

// VARIABLE NAMES: LEGAL & ILLEGAL


// 1. Declare 3 variables in one statement.
var name;

// 2. Declare 5 legal & 5 illegal variable names.
// ✅5 legal variable names:

var firstName;
var _userName;
var $amount;
var age2;
var camelCaseVar;

// ❌ 5 illegal variable names:


// var 2name;         // ❌ Starts with a number
// var user-name;     // ❌ Hyphen is not allowed
// var var;           // ❌ "var" is a reserved keyword
// var alert();       // ❌ Can't declare a variable like a function
// var first name;    // ❌ No spaces allowed in variable names

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

document.write(" <h1>“Rules for naming JS variables”</h1> ");

document.write(" Variable names can only contain, numbers, $ and. For example: Smy_1stVariable ");
document.write(" Variable must begin with a letter, $or. For example: Sname,_name or name ");
document.write(" Variable names are case sensitive  ");
document.write(" Variable names should not be JS keywords ");





//////////////////////////////////       Done




//Assignment 5 
// MATH EXPRESSIONS

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var num1 = 4;
var num2 = 2;
var result = num1 + num2;
document.write("Sum Of " + num1 + " and " + num2 + " is " + result + "<br>");

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// Addition

var sum = num1 + num2;
document.write("Sum Of " + num1 + " and " + num2 + " is " + sum + "<br>");

// Subtraction
var subtraction = num1 - num2;
document.write("Subtraction Of " + num1 + " and " + num2 + " is " + subtraction + "<br>");

// multiplication
var product = num1 * num2;
document.write("product of " + num1 + " and " + num2 + " is " + product + "<br>");

// modulus
var remainder = num1 % num2;
document.write("remainder of " + num1 + " and " + num2 + " is " + remainder + "<br>");



// 3. Do the following using JS Mathematic Expressions

// a. Declare a variable.
var value;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write("Value after variable declaration is: " + value + "<br>")

// c. Initialize the variable with some number.

var number = 4;

// d. Show the value of variable in your browser like “Initial value: 5”.

document.write("Initial value: " + number + "<br>")

// e. Increment the variable.

number++

// f. Show the value of variable in your browser like “Value after increment is: 6”.

document.write("Value after increment is: " + number + "<br>");

// g. Add 7 to the variable.

number += 7;


// h. Show the value of variable in your browser like “Valueafter addition is: 13”.

document.write("Value after addition is: " + number + "<br>");

// i. Decrement the variable.

number--
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("Value after decrement is: " + number + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.

var remainder = number % 3;

// l. Output : “The remainder is : 0”.
document.write("The remainder is : " + remainder + "<br>");





// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:


var ticketPrice = 600;
var buyingTickets = 5;

var result = ticketPrice * buyingTickets;

document.write("Total Cost to buy 5 tickets to a  movie is " + result + " PKR <br>");


//  5. Write a script to display multiplication table of any
// number in your browser. E.g

var inPutNumber = +prompt("Enter Number For table");

document.write(inPutNumber + " x 1 = " + (inPutNumber * 1) + "<br>");
document.write(inPutNumber + " x 2 = " + (inPutNumber * 2) + "<br>");
document.write(inPutNumber + " x 3 = " + (inPutNumber * 3) + "<br>");
document.write(inPutNumber + " x 4 = " + (inPutNumber * 4) + "<br>");
document.write(inPutNumber + " x 5 = " + (inPutNumber * 5) + "<br>");
document.write(inPutNumber + " x 6 = " + (inPutNumber * 6) + "<br>");
document.write(inPutNumber + " x 7 = " + (inPutNumber * 7) + "<br>");
document.write(inPutNumber + " x 8 = " + (inPutNumber * 8) + "<br>");
document.write(inPutNumber + " x 9 = " + (inPutNumber * 9) + "<br>");
document.write(inPutNumber + " x 10 = " + (inPutNumber * 10) + "<br>");


// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// Conversion Formulae:

var celcius = 30;
var ConvertToFahrenheit = (celcius - 5 / 9) * 32;
document.write(celcius + "°C is " + fahrenheit + "°F<br>");

var fahrenheit = 83;
var ConvertToCelcius = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + celcius + "°C<br>");


//  7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

var item1Price = 650;
var orderedQuantity1 = 3;
var priceOfItem2 = 100;
var orderedQuantity2 = 7;
var shippingCharges = 100;

var totalCost = (item1Price * orderedQuantity1) + (priceOfItem2 * orderedQuantity1) + shippingCharges;


document.write("Price Of Item 1 is " + item1Price + "<br>");

document.write("Qountity Of Item 1 is " + orderedQuantity1 + "<br>");

document.write("Price Of Item 2 is " + priceOfItem2 + "<br>");

document.write("Qountity Of Item 2 is " + orderedQuantity2 + "<br>");

document.write("Shipping Charges " + shippingCharges + "<br> <br>");

document.write("Total Cost of your Order Is " + totalCost + "<br>");

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var totalMarks = prompt("Enter your total marks");
var obtainedMarks = prompt("Enter your obtained marks");

var percentage = ( obtainedMarks / totalMarks ) * 100;

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Obtained Marks: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
