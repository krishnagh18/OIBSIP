let displayValue = '0';
let operator = '';
let currentValue = 0;

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue;
}

function appendNumber(number) {
  if (displayValue === '0') {
    displayValue = number.toString();
  } else {
    displayValue += number.toString();
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  operator = '';
  currentValue = 0;
  updateDisplay();
}

function setOperator(op) {
  operator = op;
  currentValue = parseFloat(displayValue);
  displayValue = '0';
  updateDisplay();
}

function calculate() {
  const newValue = parseFloat(displayValue);
  if (operator === '+') {
    currentValue += newValue;
  } else if (operator === '-') {
    currentValue -= newValue;
  } else if (operator === '*') {
    currentValue *= newValue;
  } else if (operator === '/') {
    currentValue /= newValue;
  }
  displayValue = currentValue.toString();
  operator = '';
  updateDisplay();
}

updateDisplay();