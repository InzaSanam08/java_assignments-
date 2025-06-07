// Assignment 3

// VARIABLES FOR NUMBERS



// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.     

var myAge = 16;
alert( "Iam "  +  "" +  myAge  +  ""  +  "years old");


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

document.write(visitorName+ " ordered " + quantity + " " + productTitile+ " on XYZ Clothing store.");







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

