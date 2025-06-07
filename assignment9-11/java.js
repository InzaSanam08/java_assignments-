// USER INPUT & CONDITIONAL STATEMENT


// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var userInPut = prompt("Enter Your city Name");

if (userInPut === "karachi") {
    alert(userInPut + " Weelcom! to The City of Lights");
}
else if (userInPut === "lahore") {
    alert(userInPut + "  Weelcom! to  City of Gardens");
}

else if (userInPut === "islamabad") {
    alert(userInPut + "  Weelcom! to  The Green City");
}
else if (userInPut === " multan	") {
    alert(userInPut + "  Weelcom! to  City of Saints");
}
else if (userInPut === "peshawar") {
    alert(userInPut + "  Weelcom! to City of Flowers");
}
else if (userInPut === "quetta	") {
    alert(userInPut + "	 Weelcom! to  Fruit Garden of Pakistan");
}
else {
    alert("Sorry, identity not found for: " + userInPut);
}


// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var user = prompt("Gender");

if (user === "male") {
    alert('Good Morning Sir');
}
else if (user === "female") {
    alert('Good Morning Maam');
}
else {
    alert("Invalid input. Please enter 'male' or 'female'.");
}




// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:



var signalColor = prompt("Enter the Traffic Signal color ");

if (signalColor === "red") {
    alert("Must Stop");
}
else if (signalColor === "yellow") {
    alert("Ready to Move");
}

else if (signalColor === "green") {
    alert("	Move Now");
}

else {
    alert("Invalid color entered. Please enter red, yellow, or green.");
}

// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

var fuel = +prompt("Enter remaining fuel in litres:");

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}


// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.


var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
  
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
  
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;

var laborCost = 2000;

var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}





// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

var subj1 = +prompt("Enter marks for Subject 1:");
var subj2 = +prompt("Enter marks for Subject 2:");
var subj3 = +prompt("Enter marks for Subject 3:");


var totalMarks  = prompt("Enter Total marks");

var obtainedMarks = subj1 + subj2 + subj3;
 var percentage = (obtainedMarks / totalMarks) * 100;

 var grade = "";

 if ( percentage >= 80 ) {
    grade = "A+";
 }
  
 else if ( percentage >= 70 ) {
    grade = "A";
 }
 
 else if ( percentage >= 60 ) {
    grade = "B";
 }
 
 else if ( percentage >= 50 ) {
    grade = "C";
 }
 else {
    grade = "Fail";
}


document.write("<h1> Marks Sheet </h1>");

document.write("Total Marks: " +totalMarks + "<br>");
document.write("Obtained Marks : " + obtainedMarks + "<br>");
document.write("Percentage : " + percentage + "<br>");
document.write("Grade : " + grade + "<br>") ;



// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var mySecretNumb = 7;
var useSecretNumb = +prompt("Enter your Secret Number");

if (mySecretNumb === useSecretNumb) {
    alert("🎉 Bingo! Correct answer");
}
else if (useSecretNumb + 1 === mySecretNumb) {
    alert("👌 Close enough to the correct answer");
}
else {
    alert("❌ Wrong guess, try again!");

}






// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
var numb = +prompt("Enter a number ");

if (numb % 3 === 0) {
    alert(numb + " The number is divisible by 3");
} else {
    alert(numb + " The number is not divisible by 3");
}




// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var num = +prompt("Enter a number ");

if (num % 2 === 0) {
    alert(num + " Number is Even");
} else {
    alert(num + " Number is Odd");
}




// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”


var temp = +prompt("Enter today's temperature in °C:");

if (temp > 40) {
    alert("It is too hot outside.");
}
else if (temp > 30) {
    alert("The Weather today is Normal.")

}

else if (temp > 20) {
    alert("Today’s Weather is cool.")

}
else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.")

}
else {
    alert("It's very cold");
}








// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.


var inPut1 = +prompt("Enter First number");
var inPut2 = +prompt("Enter second number");
var operation = prompt("Enter Operatiom + , - , x , / , %");

if (operation === "+") {
    result = inPut1 + inPut2;
    alert("Result " + result);
}


else if (operation === "-") {
    result = inPut1 - inPut2;
    alert("Result " + result);
}


else if (operation === "x") {
    result = inPut1 * inPut2;
    alert("Result " + result);
}


else if (operation === "/") {
    result = inPut1 / inPut2;
    alert("Result " + result);
}


else if (operation === "%") {
    result = inPut1 % inPut2;
    alert("Result " + result);
}

else {

    alert('Edher Problem e problem eww ter ko nhi maloom kiya')
}