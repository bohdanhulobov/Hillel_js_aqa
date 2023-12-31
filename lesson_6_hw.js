/*
1. Написати функцію, яка перетворює строку на масив слів,
    сортує його за алфавітним порядком і повертає (у масиві не повинно бути пробілів як елементів)
 */

const str = "Це довільний текст для створення масиву слів ";

function stringToArray(str) {
  // initializing variable with the array of words and removing extra spaces
  let array = str.trim().toLowerCase().split(" ");

  // sorting the array alpabetically
  array.sort();

  return array;
}

console.log(stringToArray(str)); // виводить [ 'для', 'довільний', 'масиву', 'слів', 'створення', 'текст', 'це' ]

/*
2. Написати функцію, яка видаляє з масива елементи, що дублюються, та повертає масив оригінальних елементів,
відсортованих за зростанням
 */
const initialArray = [1, 4, 6, 6, 7, 5, 34, 5, 1000, 66, 1];
function removeDuplicatesAndSort(arr) {
  // creating a new Set to remove duplicates
  let resultSet = new Set(arr);

  // creating a new array to let us sort it
  let resultArray = Array.from(resultSet);

  // sorting the array in ascending order
  resultArray.sort((a, b) => a - b);

  return resultArray;
}

console.log(removeDuplicatesAndSort(initialArray)); // виводить [ 1, 4, 5, 6, 7, 34, 66, 1000 ]
/*
3. Написати функцію, яка поверне масив парних чисел
 */
const initialArray2 = [2, 3, 6, 7, 9, 12];

function arrayOfEvens(arr) {
  // creating a new array
  let result = [];

  // iterating through the array and pushing even numbers into the new array
  for (number of arr) {
    if (number % 2 === 0) {
      result.push(number);
    }
  }

  return result;
}

console.log(arrayOfEvens(initialArray2)); // виводить [ 2, 6, 12 ]

/*
4. Написати функцію, яка сформує масив з послідовності чисел, формуючи його з аргумента, який збільшує
кожний наступний елемент послідовності на самого себе. Максимальне значення масиву не повинно перевищувати число 30.
 */
function createArray(element) {
  // creating a new array
  let newArray = [];

  // initializing variable with current number
  let currentNumber = element;

  // iterating through the array and pushing numbers into the new array
  while (currentNumber <= 30) {
    newArray.push(currentNumber);
    currentNumber += element;
  }

  return newArray;
}

console.log(createArray(5)); // виведе [ 5, 10, 15, 20, 25, 30 ]
console.log(createArray(3)); // виведе [ 3,  6,  9, 12, 15, 18, 21, 24, 27, 30 ]
