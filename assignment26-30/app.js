// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var user = prompt('Enter Number');

document.write('Number: ' + user + '<br>');
document.write('Round off value: ' + Math.round(user) + '<br>');
document.write('Floor value: ' + Math.floor(user) + '<br>');
document.write('Ceil value: ' + Math.ceil(user) + '<br>');



// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var user2 = prompt('Enter Negative Number');
document.write('Number: ' + user2 + '<br>');
document.write('Round off value: ' + Math.round(user2) + '<br>');
document.write('Floor value: ' + Math.floor(user2) + '<br>');
document.write('Ceil value: ' + Math.ceil(user2) + '<br>');


// 3. Write a program that displays the absolute value of
// a number. E.g. absolute value of -4 is 4 & absolute value of                 
// 5 is 5
var user3 = prompt('Enter Number');
document.write('The absolute value of ' + user3 + ' is: ' + Math.abs(user3) + '<br>');


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your browser.
var dice = Math.floor(Math.random() * 6) + 1;
document.write('Dice value: ' + dice + '<br>');

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your browser.
var coin = Math.floor(Math.random() * 2) + 1;
document.write('Coin value: ' + (coin === 1 ? 'Heads' : 'Tails') + '<br>');

// 6. Write a program that shows a random number between 1 and 100 in your browser.
var randomNumber = Math.floor(Math.random() * 100) + 1;
document.write('Random number between 1 and 100: ' + randomNumber + '<br>');

// 7. Write a program that asks the user about his weight.

var weight = prompt('Enter your weight in kilograms (e.g., 65kg, 70.5kg)');
document.write('The weight of user is: ' + weight + '<br>');

// 8. Write a program that stores a random secret number
// between 1 and 10 in a variable. Ask the user to input a number
// between 1 and 10. If user input matches the secret number,       
// congratulate the user. If not, show the correct answer.
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = prompt('Guess the secret number between 1 and 10');
if (parseInt(userGuess) === secretNumber) {
    document.write('Congratulations! You guessed the secret number: ' + secretNumber + '<br>');
} else {
    document.write('Sorry, the correct number was: ' + secretNumber + '<br>');
}




// 9. Write a program that converts the number of days to
// seconds. E.g. 2 days = 2 * 24 * 60 * 60 = 172800 seconds

var days = prompt('Enter number of days');
var seconds = days * 24 * 60 * 60;
document.write(days + ' days = ' + seconds + ' seconds<br>');


// 10. Write a program that calculates the age of a user in
// years, months, and days. Ask the user to input their birth date
// and the current date. Display the age in years, months, and days.
var birthDate = new Date(prompt('Enter your birth date (YYYY-MM-DD)'));
var currentDate = new Date();
var ageInMilliseconds = currentDate - birthDate;
var ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
var ageInYears = Math.floor(ageInDays / 365);
var ageInMonths = Math.floor((ageInDays % 365) / 30);
document.write('Your age is: ' + ageInYears + ' years, ' + ageInMonths + ' months, and ' + (ageInDays % 30) + ' days.<br>');    
