"use strict";

let array2 = [14, 150, "css", null, "javascript", 25];
let strings = [];

let squaredNum = array2.map(function (item) {
  if (typeof item === "string") {
    return strings.push(item.toUpperCase());
  }
  return item ** 2;
});

console.log(squaredNum);
console.log(strings);

//2
let answer = "tbilisi";

let userInput = prompt(String("სქართველოს დედაქალაქი არის?: "));

if (userInput.toLowerCase() === answer) {
  console.log("სწორია");
} else {
  console.log("არასწორია");
}

//3
let array1 = ["hello1", 14, 24, "hello2"];

let displayNums = array1.filter((a) => typeof a === "number");
console.log(displayNums);

//4
let languages = ["html", "css", "javascript", "python", "php"];

let checkLength = languages.filter((word) => word.length > 3);
console.log(checkLength);

//5
let words = ["Madrid", "rome", "Milan", "berlin"];

let containsM = words.filter(
  (word) => word.includes("m") || word.includes("M")
);
console.log(containsM);

//6

let link = "https://google.com";

function checkProtocol(url) {
  if (url.includes("https://")) {
    return "კი მოიცავს";
  } else {
    return "არა, არ მოიცავს";
  }
}

let result = checkProtocol(link);

console.log(result);

//7

let array6 = [-1, -2, -3, 4];

let positiveNums = array6.some((a) => a > 0);
console.log(positiveNums);

//8

let strNums = "12345";

let calc = strNums
  .split("")
  .map((item) => Number(item))
  .reduce((curr, next) => curr + next);
console.log(calc);

//9

const array = [1, 2, 3, 100, 200];

function calcArr(arr) {
  let result = arr.reduce((curr, next) => curr + next);
  return result;
}

let result2 = calcArr(array);
console.log(result2);

//10

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let concatedArr = arr1.concat(arr2, arr3);

console.log(concatedArr);
