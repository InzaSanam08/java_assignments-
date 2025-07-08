// 1. Write a program that displays current date and time in
// your browser.

var currentDate = new Date();

var currentTime = currentDate.toLocaleString();
document.write("Current Date and Time: " + currentTime + "<br>" + "<br>"
);


// 2. Write a program that alerts the current month in words.
// For example December.

var currentMonth = currentDate.getMonth();
document.write("Current Month: " + currentMonth + "<br>" + "<br>");


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',];
var currentDay = days[currentDate.getDay()];
document.write("Current Day: " + currentDay + "<br>" + "<br>");


// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

if (currentDay === 'Sun' || currentDay === 'Sat') {
  document.write("Its Fun Day " + "<br>");
}
else {
  document.write("Its not Fun Day " + "<br>" + "<br>");
}


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

if (currentMonth < 16) {
  document.write("First fifteen days of the month" + "<br>" + "<br>");
}
else {
  document.write("Last days of the month" + "<br>" + "<br>");
}

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.



// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

var currentHour = currentDate.getHours();
if (currentHour < 12) {
  document.write("Its AM" + "<br>" + "<br>");
} else {
  document.write("Its PM" + "<br>" + "<br>");
}

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

var laterDate = new Date(2020, 11, 31); // Month 11 = December (0-based index)
document.write("Later Date: " + laterDate + "<br>" + "<br>");

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.



// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


var customerName = "Inza Sanam";
var currentMonth = "july"
var numberOfUnits = 410;
var chargesPerUnit = 16;
var netAmountPayable = numberOfUnits * chargesPerUnit;
var latePaymentSurcharge = 350;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
document.write("<h1>K-Electric Bill</h1>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + currentMonth + "<br>");
document.write("Number of Units: " + numberOfUnits + "<br>");
document.write("Charges per Unit: " + chargesPerUnit + "<br>");
document.write("Net Amount Payable (within Due Date): " + netAmountPayable + "<br>");
document.write("Late Payment Surcharge: " + latePaymentSurcharge + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable + "<br>");  
