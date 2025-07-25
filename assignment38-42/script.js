// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b. 
function power(a, b) {
    var result = 1;
    for (var i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}
console.log(power(2, 4)); 


// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not. 
// Leap years ..., 2012, 2016, 2020, … 

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}
function checkLeapYear() {
    var year = parseInt(prompt("Enter a year:"));
    if (isLeapYear(year)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}
checkLeapYear();

// 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by 
// area = S(S − a)(S − b)(S − c) 
// where, S = ( a + b + c ) / 2 
// Calculate area of triangle using 2 functions 

function calculateArea(a, b, c) {
    var s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
console.log("Area of triangle: " + calculateArea(3, 4, 5)); 

// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these 
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction. 

function calculateAverage(marks) {
    var total = 0;  
    for (var i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    return total / marks.length;

}

function calculatePercentage(marks) {
    var total = 0;
    for (var i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    return (total / (marks.length * 100)) * 100;
}

function mainFunction(m1, m2, m3) {
    var marks = [m1, m2, m3];
    console.log('Average: ' + calculateAverage(marks));
    console.log('Percentage: ' + calculatePercentage(marks));
}

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.
 

function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

function deleteVowels(sentence) {
    var vowels = "aeiouAEIOU";
    var result = "";
    for (var i = 0; i < sentence.length; i++) {
        if (vowels.indexOf(sentence[i]) === -1) {
            result += sentence[i];
        }
    }
    return result;
}

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

function countVowelPairs(sentence) {
    var count = 0;
    for (var i = 0; i < sentence.length - 1; i++) {
        switch (sentence[i] + sentence[i + 1]) {
            case "aa":
            case "ee":
            case "ii":
            case "oo":
            case "uu":
            case "AE":
            case "EA":
            case "IE":
            case "OI":
            case "UI":
                count++;
                break;
        }
    }
    return count;
}   



// 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters. 

function convertDistance(distance) {
    var meters = distance * 1000;
    var feet = distance * 3280.84;
    var inches = distance * 39370.1;
    var centimeters = distance * 100000;

    console.log("Distance in meters: " + meters);
    console.log("Distance in feet: " + feet);
    console.log("Distance in inches: " + inches);
    console.log("Distance in centimeters: " + centimeters);
}

// 9. Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour. 

function calculateOvertimePay(hoursWorked) {
    var overtimeRate = 12.00;
    if (hoursWorked > 40) {
        var overtimeHours = hoursWorked - 40;
        return overtimeHours * overtimeRate;
    }
    return 0;
}


// 10. A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer.

function calculateCurrencyNotes(amount) {
    var notes100 = Math.floor(amount / 100);
    amount %= 100;
    var notes50 = Math.floor(amount / 50);
    amount %= 50;
    var notes10 = Math.floor(amount / 10);
    return {
        "100": notes100,
        "50": notes50,
        "10": notes10
    };
}
function main() {
    console.log(power(2, 4)); 
    checkLeapYear();
    console.log("Area of triangle: " + calculateArea(3, 4, 5)); 
    mainFunction(85, 90, 95); 
    console.log(customIndexOf("hello", "e")); 
    console.log(deleteVowels("Hello World")); 
    console.log(countVowelPairs("Pleases read this application and give me gratuity")); 
    convertDistance(5);
    console.log("Overtime Pay: " + calculateOvertimePay(45)); 
    console.log(calculateCurrencyNotes(560)); 
}   