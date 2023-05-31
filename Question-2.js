const words = ["apple", "banana", "grapefruit", "kiwi", "orange"];

function filterByLength(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const currentWord = arr[i];
    if (currentWord.length > 5) {
      callback(currentWord);
    }
  }
}

function displayWord(word) {
  console.log(word);
}

filterByLength(words, displayWord);
