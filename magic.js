/*
The date June 10, 1960 is special because when we write it in the following 
format, the month times, the day equals the year.

6/10/60

Write a program that uses 3 variables, month, day, and year with corresponding 
values of 10, 17, 75. The program should then determine whether the month times the 
day is equal to the year. If so, it should display a message saying the date is magic, 
Otherwise, it should display a message saying the date is not magic.
*/

var month = 10;
var day = 17;
var year = 75;

if(month * day == year){
    console.log("Date is Magic!");
} else {
    console.log("Date is Not Magic...");
}