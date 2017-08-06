console.log("hey, hey");




//Addition:
document.getElementById("addingbtn").onclick = function() { calculatorAdd() };

function addNum(num1, num2) {
    //get value input 1 from DOM
    var num1 = document.getElementById("number1").value;
    //get value of input 2 from DOM
    var num2 = document.getElementById("number2").value;
    //return the values parsed, to convert from string to number
    return parseInt(num1) + parseInt(num2);
}

//the calculatorAdd function takes the performed math from the addNum and adds it to DOM
function calculatorAdd() {
    var sum = addNum(number1, number2);
    document.getElementById("add").innerHTML = addNum(sum);

}
///////////////////////////////////////////////////////////////////

//Subtraction:
document.getElementById("subtractbtn").onclick = function() { calculatorSubtract() };

function subNum(num1, num2) {
    //get value input 1 from DOM
    var num1 = document.getElementById("number1").value;
    //get value of input 2 from DOM
    var num2 = document.getElementById("number2").value;
    //return the values parsed, to convert from string to number
    return parseInt(num1) - parseInt(num2);
}

//the calculatorSubtract function takes the performed math from the subNum and adds it to DOM
function calculatorSubtract() {
    var minus = subNum(number1, number2);
    document.getElementById("sub").innerHTML = subNum(minus);

}

///////////////////////////////////////////////////////////////////

//Multiplication:
document.getElementById("multiplybtn").onclick = function() { calculatorMultiply() };

function multNum(num1, num2) {
    //get value input 1 from DOM
    var num1 = document.getElementById("number1").value;
    //get value of input 2 from DOM
    var num2 = document.getElementById("number2").value;
    //return the values parsed, with  * operator, to convert from string to number
    return parseInt(num1) * parseInt(num2);
}

//the calculatorMultiply function takes the performed math from the multNum and adds it to DOM
function calculatorMultiply() {
    var multiply = multNum(number1, number2);
    document.getElementById("sub").innerHTML = multNum(multiply);

}

///////////////////////////////////////////////////////////////////

//Division
document.getElementById("dividebtn").onclick = function() { calculatorDivide() };

function divNum(num1, num2) {
    //get value input 1 from DOM
    var num1 = document.getElementById("number1").value;
    //get value of input 2 from DOM
    var num2 = document.getElementById("number2").value;
    //return the values parsed, with  * operator, to convert from string to number
    return parseInt(num1) / parseInt(num2);
}

//the calculatorDivide function takes the performed math from the divNum and adds it to DOM
function calculatorDivide() {
    var divide = divNum(number1, number2);
    document.getElementById("sub").innerHTML = divNum(divide);

}

//////////////////////////////////////////////////////////////////

//3 argument function

document.getElementById("doublebtn").onclick = function() { calculatorDouble() };

function doubleNum(num1, num2, any) {

    //get value input 1 from DOM
    var num1 = document.getElementById("number1").value;
    //get value of input 2 from DOM
    var num2 = document.getElementById("number2").value;
    //return the values parsed, with  * operator, to convert from string to number
    return (parseInt(num1) * parseInt(num2)) * 2;

};

//the calculatorDivide function takes the performed math from the divNum and adds it to DOM
function calculatorDouble() {
    var double = doubleNum(number1, number2, doubleNum);
    document.getElementById("double").innerHTML = doubleNum(double);

}