/*
1. 
  Напиши функцію map(fn, array), яка приймає на вхід функцію та масив, 
  та обробляє кожен елемент масиву цією функцією, повертаючи новий масив. 
  Приклад:
*/

function map(fn, array) {
  //creating a new array
  let result = [];

  //iterating through the array and applying the function
  for (let number of array) {
    result.push(fn(number));
  }
  return result;
}
function square(x) {
  return x * x;
} // повертає квадрат числа

console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []

// Зверніть увагу: функція не повинна змінювати переданий їй масив:

var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]

/*
  2. Написати функцію яка форматує текст: 
    - прибирає пробіли з початку і кінця, 
    - прибарає всі займі пробіли (два і більше підряд)
    - кожне речення починає з великої букви, а всі наступні символи в речені робить маленькими
*/
function formatText(text) {
  let formattedText = [];

  // cleaning up extra spaces and formatting entire text to the lowercase
  formattedText = text.trim().replaceAll("  ", "").toLowerCase();

  // splitting text into sentences
  formattedText = formattedText.split(". ");

  // capitalizing first letter of each sentence
  formattedText = formattedText.map((sentence) => {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  });

  // joining sentences into string
  formattedText = formattedText.join(". ");

  return formattedText;
}
console.log(formatText("heLLo, this is My teXT.   have A NiCe DaY  ")); // "Hello, this is my text. Have a nice day"
console.log(formatText(" Hello woRld   ")); // "Hello world"

/*
    3. Написати функцію, яка поверне число голосних букв в строкі
*/

function countVowels(str) {
  // initializing variable with the set of vowels
  const vowels = "aeiouy";

  // initializing variable with count of vowels
  let vowelCount = 0;

  // iterating through the string
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCount++;
    }
  }

  return vowelCount;
}

console.log(countVowels("aaaat")); // виводить 4
console.log(countVowels("Hello world")); // виводить 3

/*
    4. Написати функцію, яка видаляє всі спеціальні символи зі строки (залишає лише числа, букви і пробіли в будь-якому регістрі)
*/
function clearStr(str) {
  // initializing variable with the RegEx for special characters
  const specialCharsRegex = /[^a-zA-Z0-9\s]/g;

  return str.replaceAll(specialCharsRegex, "").trim().replaceAll("  ", " ");
}

console.log(clearStr("My var: 22 ")); // виведе "My var 22"
console.log(clearStr("Foo %$#% bar")); // виведе "Foo bar"
console.log(clearStr("; SELECT * FROM passwords ")); // виведе "SELECT FROM passwords"
