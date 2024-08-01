// 1. Write a program that displays current date and time in
// your browser.

let date = new Date();

document.write(date+"<br>")

// 2. Write a program that alerts the current month in words.
// For example December.

let d = new Date()

let monthNames = [
    "January", "February", "March", "April", "May", "June","July"
    , "August", "September", "October", "November", "December"];

let currentMonth = monthNames[d.getMonth()];

alert("Current Month : " + currentMonth)

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

let day = new Date()

let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let currentDay = dayNames[day.getDay()];

alert("the first 3 letters of the current day : " + currentDay)

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

let weekend = new Date()

let days = weekend.getDay()

if(days === 6 || days === 0){
    alert("It's a fun day")
}

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

let dt = new Date()

let ldate = dt.getDate()

if(ldate < 16){
    alert("First fifteen days of the month")
}else{
    alert("Last days of the month")
}


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

 let currentDate = new Date();

let milliseconds = currentDate.getTime()

let minutes =  Math.floor(milliseconds / (1000 * 60));

let Since = minutes;

document.write("<br>"+"Minutes since midnight, Jan. 1, 1970: " + Since)

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

let hour = new Date()

let currentHour = hour.getHours()

if(currentHour < 12){
    alert("Its AM")
}else{
    alert("Its PM")
}

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

let laterDate = new Date(2020,11,31)

document.write("<br>"+"Later Date : "+ laterDate)

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

let ramadanStartDate = new Date(2015, 5, 18);
let newd = new Date();

let timeDifference = newd - ramadanStartDate;

let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

document.write("<br>"+"Number of days past since 1st Ramadan: " + daysDifference);

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

let referenceDate = new Date()

let startDate = new Date(2015, 0, 1); 

let timeD = referenceDate - startDate;

let secondsDifference = Math.floor(timeD / 1000);

document.write( "<br>"+"Seconds elapsed between the reference date and the beginning of 2015: " + secondsDifference);

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

let dh = new Date()

let hours = dh.getHours()

document.write("<br>"+"Current Hours: " + hours);

dh.setHours(hours + 1);

document.write("<br>"+"Updated Date and Time: " +dh)

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

let getDate = new Date();

// Reset the date object to 100 years back
getDate.setFullYear(getDate.getFullYear() - 100);

// Show the date in an alert box
alert("Date 100 years back: " + getDate);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

let age = prompt("Please enter your age:");

if (age !== null && !isNaN(age) && age.trim() !== "") {
    
    let currentYear = new Date().getFullYear();

    let birthYear = currentYear - parseInt(age);

    
    document.write( "<br>"+"Your birth year is: " + birthYear+"<br>")
}else{
    document.write( "Please enter a valid age.")
}

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

 // Predefined values for demonstration
 let customerName = "John Doe";
 let numberOfUnits = 350; // Number of units consumed
 let chargesPerUnit = 5.75; // Charges per unit in your currency
 let latePaymentSurcharge = 15.00; // Late payment surcharge in your currency

 let DATA = new Date().toLocaleString('default', { month: 'long' });

 let netAmountPayable = numberOfUnits * chargesPerUnit;
 let grossAmountPayable = netAmountPayable + latePaymentSurcharge;

 netAmountPayable = netAmountPayable.toFixed(2);
 grossAmountPayable = grossAmountPayable.toFixed(2);

 document.write("<h2> K-Electric Bill </h2>")

 document.write("Customer Name : " + customerName + "<br>")
 document.write("Current month : " + DATA + "<br>")
 document.write("Number of units : " + numberOfUnits.toFixed(2) + "<br>")
 document.write("Charges per units : " + chargesPerUnit.toFixed(2) + "<br>")
 document.write("Net amount payable(with in due date) : " + netAmountPayable + "<br>")
 document.write("Late payment surcharges : " + latePaymentSurcharge.toFixed(2) + "<br>")
 document.write("Gross amount payable(after due date) : " + grossAmountPayable + "<br>")



