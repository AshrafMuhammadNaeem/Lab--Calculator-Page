var userName = window.prompt("Please enter your name");
var greetingParagraph = document.getElementById("greetings");
greetingParagraph.innerHTML += "," + userName ;
var number1 = parseInt(window.prompt("Please enter number1"));
var op1 = document.getElementById("operand1");
op1.innerHTML += number1 ;
var number2 = parseInt(window.prompt("Please enter number2"));
var op2 = document.getElementById("operand2");
op2.innerHTML += number2;
var sum = number1 +number2;
document.getElementById("addition").innerHTML += " The sum of " + number1 + " and " + number2 + ' is '+ sum  ;
document.getElementById("substraction").innerHTML += " The difference of " + number1+ " and " +number2 + " is " + (number1 - number2);
document.getElementById("multiply").innerHTML += " The product of " + number1+ " and " + number2 + " is " + (number1*number2);
document.getElementById("divide").innerHTML += " The quotient of " + number1+ " and " +number2 + " is " + (number1/number2) ;
document.getElementById("modulus").innerHTML += " The mod of " + number1+ " and " +number2 + " is " + (number1%number2) ;

