console.log("Hello World");

// function timeConversion(s) {
//   // Write your code here
//   var [hours, min, secwithFormat] = s.split(":");
//   var second = secwithFormat.substr(0, 2);
//   var format = secwithFormat.substr(2, 4);

//   if (hours === "12") {
//     hours = "00";
//   }
//   if (format === "PM") {
//     hours = parseInt(hours, 10) + 12;
//   }
//   console.log(`${hours}:${min}:${second}`);
// }

// timeConversion("10:05:45PM");

//! Find Palindrome

// function palindrome() {
//   var str = "madam";

//   var strArr = str.split("");
//   var strArrreverse = strArr.reverse();

//   var strJoin = strArrreverse.join("");

//   if (strJoin === str) {
//     console.log("Palindrome");
//   } else {
//     console.log("Not");
//   }
//   console.log(strArr);
// }

// palindrome();

// function palindrome(str) {
//   var re = /[^A-Za-z0-9]/g;
//   str = str.toLowerCase().replace(re, '');

//   var len = str.length;

//   for (var i = 0; i < len/2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//         return false;
//     }
//   }
//   return true;
//  }
//  console.log(palindrome("A man, a pla n, a canal. Panama"));

// ! Word Occurance

// function wordOccurance() {
//   var word = "zindabad";

//   var wordArr = word.split("a");

//   console.log(wordArr);
//   console.log(wordArr.length - 1);
// }

// wordOccurance();

// ! Find Second Highest value in arr

// function secondHighest() {
//   var val = [3, 4, 5, 6, 7, 8, 2, 1];

//   var maxVal = Math.max(...val);
//   var maxValInd = val.indexOf(maxVal);
//   var removefirstMax = val.splice(maxValInd, 1);
//   var maxVal2 = Math.max(...val);
//   console.log(maxVal2);
// }

// secondHighest();

// ! Find Second Highest value in arr

// function secondHighest() {
//   var val = [3, 4, 5, 6, 7, 8, 2, 1];
//   var largest = val[0];
//   for (var i = 0; i < val.length; i++) {
//     if (val[i] > largest) {
//       largest = val[i];
//     }
//   }
//   console.log(largest);
// }

// secondHighest();

// ! Find Matrix

// function squareMatrix() {
//   var arr = [
//     [3, 4, 5],
//     [6, 7, 8],
//     [2, 1, 99],
//   ];
//   let sum1 = 0;
//   let sum2 = 0;

//   let check = 0;
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr.length; j++) {
//       check += arr[i][j];
//       if (i === j) {
//         sum1 = sum1 + arr[i][j];
//       }
//       check--;
//     }
//   }
//   console.log(sum1);
// }

// squareMatrix();

// ! Staircase
// var n = 6;

// for (var a = 1; a <= n; a++) {
//   var str = "";
//   for (var b = 1; b <= n; b++) {
//     // debugger;
//     if (n - a < b) {
//       str += "#";
//     } else {
//       str += " ";
//     }
//   }
//   console.log(str);
// }

//! Mini Max Sum Problem

// var arr = [1, 2, 3, 4, 5];

// var abc = [];

// for (var i = 0; i < arr.length; i++) {
//   var a = 0;
//   for (var j = 0; j < arr.length; j++) {
//     if (i !== j) {
//       a += arr[j];
//     }
//   }
//   abc.push(a);
// }

// var smallest = abc[0];
// var largest = abc[0];
// for (var i = 1; i < abc.length; i++) {
//   if (abc[i] < smallest) {
//     smallest = abc[i];
//   }
//   if (abc[i] > largest) {
//     largest = abc[i];
//   }
// }

// console.log(smallest, largest);

//!  Time Conversion

// var s = "12:05:45PM"

// var [hours, min, secwithFormat] = s.split(":");
// var second = secwithFormat.substr(0, 2);
// var format = secwithFormat.substr(2, 4);

// if (hours === "12") {
//   hours = "00";
// }
// if (format === "PM") {
//   hours = parseInt(hours) + 12;
// }
// console.log(hours);

//! Find missing number in array

// var arr = [1,2,3,5,6,7];

// for (let i = 0; i < arr.length; i++) {
//   if(arr[i] !== i+1){

//     console.log(i+1);
//     break;
//   }
// }

// ! Find Odd Number In js

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (var i = 0; i < arr.length; i++) {
//   if(arr[i] % 2 !== 0){
//     console.log(arr[i]);
//   }
// }

//! Check
// function minMax(arr) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     var sum = 0;
//     for (var j = 0; j < arr.length; j++) {
//       if (i === j) {
//       } else {
//         sum += arr[j];
//       }
//     }
//     newArr.push(sum);
//   }

//   var highest = newArr[0];
//   var lowest = newArr[0];
//   for (var k = 0; k < newArr.length; k++) {
//     if (newArr[k] < lowest) {
//       lowest = newArr[k];
//     }
//     if (newArr[k] > highest) {
//       highest = newArr[k];
//     }
//   }
//   return `${lowest} ${highest}`;
// }
// var arr = [1, 2, 3, 4, 5];

// console.log(minMax(arr));

//!  check 2

// var candles = [3, 2, 8, 3, 3, 4, 6, 8, 8];

// var tallest = candles[0];
// var sum = 0;
// for (var i = 0; i < candles.length; i++) {
//   if (candles[i] > tallest) {
//     tallest = candles[i];
//     sum = 0;
//   }
//   if (tallest === candles[i]) {
//     sum = sum + 1;
//   }
// }

// console.log(sum);

//! Check var let scope

// console.log(a);

// {
//     var a  = "ameen";
//     // let a = "zahid"
// }
