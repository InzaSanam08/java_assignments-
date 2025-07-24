// 1. Write a function that displays current date & time in your
// browser.

var currentDate = new Date();
var currentTime = currentDate.toLocaleString();
document.write("Current Date and Time: " + currentTime + "<br>" + "<br>"
);


// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

function user(firstName, lastName) {
    document.write("Wellcome! " + firstName + "" + lastName + "<br>" + "<br>");
}
user("Inza", "Sanam");


// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.


var num1 = parseInt(prompt("Enter first number:"));
var num2 = parseInt(prompt("Enter second number:"));
function addNumbers(num1, num2) {
    return num1 + num2;
}

addNumbers(num1, num2);
document.write("Sum of " + num1 + " and " + num2 + " is: " + addNumbers(num1, num2) + "<br>" + "<br>");


// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

var numb1 = parseFloat(prompt('Enter Number 1'));
var operator = prompt('Enter operator (+, -, *, /)');
var numb2 = parseFloat(prompt('Enter Number 2'));

function calculator(numb1, numb2, operator) {
    if (operator === '+') {
        return numb1 + numb2
    }
    else if (operator === '-') {
        return numb1 - numb2
    }
    else if (operator === '*') {
        return numb1 * numb2
    }
    else if (operator === '/') {
        return numb1 / numb2
    }
    else {
        'Invalid Value'
    }
}

var result = calculator(numb1, numb2, operator);
document.write("Result: " + result);

// 5. Write a function that squares its argument.

function square(num) {
    return num * num;
}


// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

var start = parseInt(prompt("Enter start number:"));
var end = parseInt(prompt("Enter end number:"));

function counting(start, end) {

    for (var i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}
counting(4, 10);


// 6. Write a function that computes factorial of a number.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

function calculateSquare(num) {
    return num * num;
}

function calculateHypotenuse(base, perpendicular) {
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    return Math.sqrt(baseSquare + perpendicularSquare);
}

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value

function calculateArea(width, height) {
    return width * height;
}
// ii. Arguments as variables
var rectWidth = 5;
var rectHeight = 10;
var area = calculateArea(rectWidth, rectHeight);
document.write("Area of rectangle with width " + rectWidth + " and height " + rectHeight + " is: " + area + "<br>" + "<br>");

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

function isPalindrome(str) {
    var reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
isPalindrome("madam");
isPalindrome("racecar");


// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function capitalizeFirstLetter(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

var exampleString = 'the quick brown fox';
var capitalizedString = capitalizeFirstLetter(exampleString);
document.write("Capitalized String: " + capitalizedString + "<br>");

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function findLongestWord(str) {
    var words = str.split(' ');
    var longestWord = '';
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
var exampleString2 = 'Web Development Tutorial';
var longestWord = findLongestWord(exampleString2);
document.write("Longest Word: " + longestWord + "<br>");

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function countLetterOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count++;
        }
    }
    return count;
}
var sampleString = 'JSResourceS.com';
var letterToCount = 'o';

var occurrences = countLetterOccurrences(sampleString, letterToCount);
document.write("Occurrences of '" + letterToCount + "' in '" + sampleString + "': " + occurrences + "<br>");

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr Area of circle = πr2 

function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("The circumference is: " + circumference + "<br>");
}

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    document.write("The area is: " + area + "<br>");
}

var radius = parseFloat(prompt("Enter the radius of the circle:"));
calcCircumference(radius);
calcArea(radius);
