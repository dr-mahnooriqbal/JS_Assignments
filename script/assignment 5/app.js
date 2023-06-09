// 1. Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.
var mynum=3;
var yournum=5;
var sum =yournum + mynum;
document.write("the sum of 3 and 5 is "+sum+"<br/>");

// 2. Repeat task1 for subtraction, multiplication, division &
// // modulus.
var div =yournum / mynum;
document.write("the subtraction of 3 and 5 is "+div +"<br/>")
var mul =yournum * mynum;
document.write("the multiplication of 3 and 5 is "+ mul +"<br/>")
var sub =yournum - mynum;
document.write("the division of 3 and 5 is "+sub +"<br/>")
var mod =yournum % mynum;
document.write("the modulus of 3 and 5 is "+ mod +"<br/>")

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
var num;
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
document.write("Value after variable declaration is:" +num+ "<br/>");
// c. Initialize the variable with some number.
var num=5;
// d. Show the value of variable in your browser like “Initial
// value: 5”.
document.write("Initial value:"+num+"<br/>");
// e. Increment the variable.
num++;
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
document.write("Value after increment is:"+num+"<br/>");
// g. Add 7 to the variable.
num +=7;
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
document.write("Value after addition is:"+num+"<br/>");
// i. Decrement the variable.
num--;
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
document.write("Value after  decrement is:"+num+"<br/>");
// k. Show the remainder after dividing the variable’s value 
// by 3. 
num=num%3;
// l. Output : “The remainder is : 0”.
document.write("Output : “The remainder is :"+num+"<br/>");
// 4. Cost of one movie ticket is 600 PKR. Write a script to 
// store
// ticket price in a variable & calculate the cost of buying 5 
// tickets
// to a movie. Example output:
var ticketPrice=600;
var total=ticketPrice*5;
document.write("cost of buying 5 tickets to a movie:"+total+"<br/>")

// 5. Write a script to display multiplication table of any 
// number in your browser. E.g
var tableNumber = 2;
var i = 0;
document.write("<h2>"+"<b>"+"Table of " + tableNumber +"</b>"+"</h2>" +"<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>");


// 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
document.write("<h2>"+"Temperatue Unit Conversion"+"</h2>"+"<br/>");
// a. Store a Celsius temperature into a variable.
var celsius=37;
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "C is " + fahrenheit + "F" + "<br/>");
// c. Now store a Fahrenheit temperature into a variable.
fahrenheit=98.6;
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:
celsius = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "F is " + celsius + "C" + "<br/>");
// 7. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variable
document.write("<h2>"+"Shopping Cart"+"</h2>"+"<br/>")
// a. Price of item 1
var item1price = 150;
// b. Price of item 2
var item2price = 350;
// c. Ordered quantity of item 1
var quantityItem1 = 2;
// d. Ordered Quantity of item 2
var quantityItem2 = 4;
// e. Shipping charges
var shippingCharges = 100;
// Compute the total cost & show the receipt in your browser.
var total = (item1price * quantityItem1) + (item2price * quantityItem2) + shippingCharges;
document.write("Price of Item 1 is :" + item1price + "<br/>");
document.write("Quantity of Item 1 is :" + quantityItem1 + "<br/>");
document.write("Price of Item 2 is: " + item2price + "<br/>");
document.write("Quantity of Item 2 is :" + quantityItem2 + "<br/>");
document.write("Shipping Charges: " + shippingCharges + "<br/>");
document.write("<br/>");
document.write("Total cost of your order is :" + total);

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
var totalMarks = 1100;
var marksObtained = 910;
var percentage = (marksObtained / totalMarks) * 100;

document.write("<h2>" + "Marks Sheet" + "</h2>");
document.write("Total Marks: " + totalMarks + "<br/>");
document.write("Marks Obtained: " + marksObtained + "<br/>");
document.write("Percentage: " + percentage);

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
var pkr = (10 * 104.80) + (25 * 28);
document.write("<h2>" + "Currency Conversion in PKR" + "</h2>");
document.write("Total Currency in PKR: " + pkr);

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
var num = 5;
num = (((num + 5) * 10) / 2);
document.write("Output: " + num);

// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
var year = 2023;
// b. Store their birth year in a variable.
var birthYear = 2001;
// c. Calculate their 2 possible ages based on the stored values.
var age = year - birthYear;
// Output them to the screen like so: “They are either NN or NN years old”.
document.write("<h2>" + "The Age Calculator" + "</h2>");
document.write("Current Year: " + year + "<br/>");
document.write("Birth Year: " + birthYear + "<br/>");
document.write("Your age is: " + age);

// 12. The Geometrizer: Calculate properties of a circle.
document.write("<h2>" + "The Geometrizer" + "</h2>");
// a. Store a radius into a variable.
var radius = 7;
document.write("Radius of a Circle: " + radius + "<br/>");
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
var circumference = 2 * 3.142 * radius;
document.write("The circumference is: " + circumference + "<br/>");
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var area = 3.142 * radius * radius;
document.write("The area is: " + area);

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?Wonder no more.
document.write("<h2>" + "The Lifetime Supply Calculator" + "</h2>");
// a. Store your favorite snack into a variable
var snack = "Chocalate Chip";
// b. Store your current age into a variable.
var age = 22;
// c. Store a maximum age into a variable.
var maxAge = 50;
// d. Store an estimated amount per day (as a number).
var amount = 3;
// e. Calculate how many would you eat total for the rest of your life.
var eat = (60 - 22) * (365 * 3);
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
document.write("Favorite Snack: " + snack + "<br/>");
document.write("Current Age: " + age + "<br/>");
document.write("Estimated Maximum Age: " + maxAge + "<br/>");
document.write("Amount of snacks per day: " + amount + "<br/>");
document.write("You will need " + eat + " to last you until the ripe old age of " + maxAge);
