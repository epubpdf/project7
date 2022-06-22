//input
let num1 = parseInt(prompt("Enter first number :"));
let num2 = parseInt(prompt("Enter second number :"));
let operation = prompt("Enter an operation: /, +, -, * :");

//processing
if(operation == "+"){
    alert(num1+num2);
}

else if(operation == "-"){
    alert(num1-num2);
}

else if(operation == "/"){
    alert(num1/num2);
}

else if(operation == "*"){
    alert(num1*num2);
}