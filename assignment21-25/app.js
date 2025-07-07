// // 1. Write a program that takes two user inputs for first and
// // last name using prompt and merge them in a new variable
// // titled fullName. Greet the user using his full name.

const { use } = require("react");


var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName + '' + lastName

// // alert('Hello ' + fullName + '! Welcome to our website.');
// // 2. Write a program to take a user input about his favorite
// // mobile phone model. Find and display the length of user
// // input in your browser

var userPhone = prompt('Enter your Favorite phone');

var strLength = userPhone.length;

document.write('My Favorite Phone is: ' + userPhone + ' <br>')

document.write('Length of string: ' + strLength + ' <br>')

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

var country = 'Pakistan';

var index = country.indexOf('n');

document.write('String: ' + country + ' <br>')
document.write('index of n is: ' + index + ' <br>')


// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

var word = 'Hello World';
index = word.lastIndexOf('l')
document.write('String: ' + word + ' <br>')
document.write('Last index of l: ' + index + ' <br>')

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

var a = 'Pakistani';
index = a.charAt(3)
document.write('String: ' + a + ' <br>')
document.write('Character at index 3: ' + index + ' <br>')


// 6. Repeat Q1 using string concat() method.

firstName = prompt("Enter your first name:");
lastName = prompt("Enter your last name:");

fullName = firstName.concat(lastName)

alert('Hello ' + fullName + '! Welcome to our website.');


// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var city = 'Hyderabad';
// var replaceName = city.replace( 'Hyder','Islam');
// document.write('City: ' + city + ' <br>');
// document.write('after Replacement: ' + replaceName + ' <br>')

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

var message = 'Ali and Sami are best friends.They play cricket and football together.';

var replaceMessage = message.split('and').join('&')

document.write("Original message: " + message + "<br>");
document.write("After replacement: " + replaceMessage);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// string value
var num1 = '272';
var type1 = typeof (num1);
document.write("Value: " + num1 + "<br>");
document.write("Type : " + type1 + "<br>");
 // convert to number
var num2 = Number(num1);
var type2 = typeof (num2);
document.write("Value: " + num2 + "<br>");
document.write("Type : " + type2 + "<br>");

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

var userInPut = prompt('Name')

document.write('User InPut : ' + userInPut + " <br>");
document.write('Upper Case : ' + userInPut.toUpperCase() + " <br>")

// 11. Write a program that takes user input. Convert and
// show the input in title case.

var user = prompt('Enter any text ')
var titleCase = user.charAt(0).toUpperCase() + user.slice(1).toLowerCase();
document.write('User InPut : ' + user + " <br>");
document.write('Upper Case : ' + titleCase + " <br>");

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 35.36 ;
// conver to string
var str = num.toString();
// remove dot
var replace = str.replace("." , "")

document.write('Number : ' + num + " <br>");
document.write('Result : ' + replace + " <br>");



// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
userInput = userInput.toLowerCase();

if (userInput === a) {
    alert("Yes, " + userInput + " is available at index " + a.indexOf(userInput) + " in our bakery.");
} else {
    alert("We are Sorry, " + userInput + " is not available in our bakery.");
}


// 15. Write a program to take password as an input from user.
// The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number.    
// c. It must at least 6 characters long.
// d. It should not contain any special character.
// e. It should not contain any space.
// f. It should not contain any character in uppercase.



// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university = "University of Karachi";
var array = university.split(" ");
document.write("Array elements:<br>");
for (var i = 0; i < array.length; i++) {
    document.write(array[i] + "<br>");
}

// 17. Write a program to display the last character of a user
// input.

var userInput = prompt("Enter a string:");
var lastCharacter = userInput.charAt(userInput.length - 1);
document.write("Last character: " + lastCharacter + "<br>");

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.