function addNumbers (num1, num2) {
  return num1 + num2;
}

function subtractNumbers (num1, num2) {
  return num1 - num2;
}

function multiplyNumbers (num1, num2) {
  return num1 * num2;
}

function divideNumbers (num1, num2) {
  return num1 / num2;
}

function calculator (num1, num2, operation) {
  if (operation === 'addition') {
    return addNumbers(num1, num2);
  } else if (operation === 'subtraction') {
    return subtractNumbers(num1, num2);
  } else if (operation === 'multiplication') {
    return multiplyNumbers(num1, num2);
  } else if (operation === 'division') {
    return divideNumbers(num1, num2);
  }
}

console.log(calculator(1, 2, 'addition'));
console.log(calculator(5, 3, 'subtraction'));
console.log(calculator(3, 4, 'multiplication'));
console.log(calculator(10, 2, 'division'));