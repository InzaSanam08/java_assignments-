// MATH EXPRESSIONS

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var a = 10;        
document.write("The value of a is: " + a + "<br><br>");

document.write("The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a + "<br>");



// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;





// 3. Write a program that takes input a name from user &
// greet the user.


var userName = prompt("Enter Your Name");

alert("Aslam u Alaikum" + "" + userName)


//5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.


var userInPut = prompt("Enter your fav number");



//6.
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var subj1 = prompt("Enter subject 1 ");
var subj2 = prompt("Enter subject 2 ");
var subj3 = prompt("Enter subject 3 ");

var totalMarksPerSubject = 100;

var obtainedMark1 = +prompt("Enter subject 1 Marks ");
var obtainedMark2 = +prompt("Enter subject 2 Marks ");
var obtainedMark3 = +prompt("Enter subject 3 Marks ");

var totalObtained = subj1 + subj3 + subj3;

var totalMarks = totalMarksPerSubject * 3;

var percentage = (totalObtained / totalMarks) * 100;


document.write("<h1> Subject Total Marks Obtained Marks Percentage </h1>");
document.write(subj1 + "100" + obtainedMark1 + percentage);
document.write(subj2 + totalMarksPerSubject + obtainedMark1 + percentage);
document.write(subj3 + totalMarksPerSubject + obtainedMark1 + percentage);



/////////////////////////////////////////    Done