// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).



// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var num1 = +prompt('Enter Number ');
var num2 = +prompt('Enter Second Number');
if (num1 > num2) {
    console.log("The larger number is: " + num1);
}
else if (num1 < num2) {
    console.log("The larger number is: " + num2);
}
else {
    console.log("Both numbers are equal.");
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
var num = +prompt('Enter A Number');

if (num > 0) {
    console.log("Number is Positive");
}
else if (num < 0) {
    console.log("Number is Negative");
}
else if (num === 0) {
    console.log("Number is Zero");
}
else {
    console.log("Invalid input");
}

// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

var inPutCharacter = prompt('Enter Single Character');
var isItVowel = false

if (inPutCharacter.length === 1) {
    if (   inPutCharacter === 'a'
        || inPutCharacter === 'e' 
        || inPutCharacter === 'i'
        || inPutCharacter === 'o' 
        || inPutCharacter === 'u'
    ) {
        isItVowel = true
    }
}
else {
    false
}


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var password = 'abc123';
var userInPut = prompt("Enter your Password");

if (!userInPut) {
    console.log("Please enter your password");
}
else if (password === userInPut) {
    console.log('Correct! The password you entered matches the original password')
}

else {
    console.log('Incorrect password');
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
var hour = 13;
if (hour < 18) {
    console.log(greeting = "Good day");
}
else {
    console.log(greeting = "Good evening");
}
// console.log(greeting);


// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements