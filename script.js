var calcEle = document.body.querySelector(".calculator");
var answer = 0;
var num1 = Number(prompt("Enter a number"));
if (isNaN(num1) == false) {
  var num2 = Number(prompt("Enter another number"));
  if (isNaN(num2) == false) {
    var operator = prompt("Choose an operator: +, -, *, /");
    if (operator == "+") {
      answer = num1 + num2;
      calcEle.innerHTML = "The answer is " + answer;
    } else if (operator == "-") {
      answer = num1 - num2;
      calcEle.innerHTML = "The answer is " + answer;
    } else if (operator == "*") {
      answer = num1 * num2;
      calcEle.innerHTML = "The answer is " + answer;
    } else if (operator == "/") {
      answer = num1 / num2;
      calcEle.innerHTML = "The answer is " + answer;
    } else {
      calcEle.innerHTML = "Invalid operator";
    }
  } else {
    calcEle.innerHTML = "Invalid number 2";
  }
} else {
  calcEle.innerHTML = "Invalid number 1";
}