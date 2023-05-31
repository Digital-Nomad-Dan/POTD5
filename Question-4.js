function filterArray(arr, callback) {
  const filterArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filterArray.push(arr[i]);
    }
  }
  return filterArray;
}

const numbers = [1, 2, 3, 4, 5];
const isEven = function (num) {
  return num % 2 == 0;
};

console.log(filterArray(numbers, isEven));
