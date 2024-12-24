function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}

document.getElementById("calculateBtn").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("number1").value);
  const operator = document.getElementById("operator").value;
  const num2 = parseFloat(document.getElementById("number2").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = "Error: Please enter valid numbers.";
    return;
  }

  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      result = "Invalid operator";
  }

  resultDiv.textContent = 
    typeof result === "number" 
      ? `Result: ${result.toFixed(2)}` 
      : result;
});