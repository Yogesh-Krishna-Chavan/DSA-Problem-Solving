/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  const operators = ["+", "-", "*", "/"];

  for (const token of tokens) {
    if (!operators.includes(token)) {
      stack.push(parseInt(token));
    } else {
      const operand2 = stack.pop(); //pop the last element
      const operand1 = stack.pop(); //pop the last element

      switch (token) {
        case "+":
          stack.push(operand1 + operand2);
          break;
        case "-":
          stack.push(operand1 - operand2);
          break;
        case "*":
          stack.push(operand1 * operand2);
          break;
        case "/":
          stack.push(Math.trunc(operand1 / operand2));
          break;
      }
    }
  }
  return stack.pop();
};
