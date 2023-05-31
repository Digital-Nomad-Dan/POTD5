function calculate(num1, num2, callback) {
  return callback(num1, num2);
}

const add = function (a, b) {
  return a + b;
};

console.log(calculate(5, 3, add));
