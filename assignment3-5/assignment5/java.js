

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

document.write("<h1> Shopping Cart </h1> " + "<br>");

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

var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h1> Mark Sheet</h1> " + "<br>");

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var totalPKRCrrency = (10 * 104) + (25 * 28);

document.write("<h1> Crrency in PKR </h1> " + "<br>");

document.write("Total Crrency in PKR : " + totalPKRCrrency + "<br>");

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var num = 4;
var result = ((num + 5) * 10) / 2;
console.log(result);


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

var currentYear = 2025;
var birthYear = 2008;

var currentAge = currentYear - birthYear;


document.write("<h1> Age Calculator </h1> " + "<br>");

document.write("Current year " + currentYear + "<br>");

document.write("Birth year " + birthYear + "<br>");

document.write("Current Age " + currentAge + "<br>");



// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write("<h1> The Geometrizer</h1> " + "<br>");

var redius = 20;
var pi = 3.142;

document.write("Redius of circle is " + redius + "<br>");

var circumference = 2 * pi * redius;
document.write("The circumference is " + circumference + "<br>");

var area = pi * redius * redius;
document.write("The area is " + area + "<br>");





// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


var favSnack = "Chocolate Chip";
var age = 16;
var maxAge = 53;
var maxAmount = 3

document.write("<h1> The Lifetime Supply Calculator</h1> " + "<br>");

document.write("Favourite Snack: " + favSnack + "<br>");
document.write("Current age: " + age + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + maxAmount + "<br>");
// document.write("You will need 150 chocolate chip to last you until the ripe old age of 65" + currentAge + "<br>");
