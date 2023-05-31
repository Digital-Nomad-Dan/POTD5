const numbers = [1, 2, 3, 4, 5];

function multiplyByTwo(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const multipliedValue = arr[i] * 2;
    callback(multipliedValue);
  }
}

function displayResult(Value) {
  console.log(Value);
}

multiplyByTwo(numbers, displayResult);
