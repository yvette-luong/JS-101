// 2nd JS Assignment

// 29. Write a JavaScript function to get the function name.
// const func1 = () => {};
// const func2 = function () {};
// function func3() {}
// const funcName = [ func1, func2, func3]
// function getFuncName(arr){
//   return arr.map(fn => fn.name) ;
// }

// console.log(getFuncName(funcName));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

// function funcExample() {
//     console.log('This is a passed function')
// }

// const notAFunc = 'string';

// function passFunc(fn){
//     if (typeof fn==="function") {
//         console.log('Javascript Function');
//         fn();
//     } else {
//         console.log('Not a JS function');
//     }
// }

// passFunc(funcExample);
// passFunc(notAFunc);

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor
// problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". 
// The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three,
// but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are
// themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one
// substring or returning the maximum length of a palindromic substring.
 
// function isPalindrome(str) {
//     return str === str.split('').reverse().join('');
// }

// function longestPand(str) {
//     let longest = '' ;

//     for(let i = 0; i < str.length; i++) {
//         for (let j = i +1; j <= str.length; j++) {
//             const substr=str.slice(i,j);
//             if (isPalindrome(substr) && substr.length >longest.length) {
//                 longest = substr
//             }
//         }
//     }
//     return longest; 
// }

// console.log(longestPand('racecar'));
// console.log(longestPand('abracadabra'));

// 26. Write a JavaScript function to find the longest substring in a given string without repeating characters.

// function longestSubstr(str) {
//     let seen = new Set();
//     let longest = "";
//     let start = 0;

//     for (let end = 0; end < str.length; end ++) {
//         while (seen.has(str[end])) {
//             seen.delete(str[start]);
//             start ++;
//         }
//         seen.add(str[end]);
//         if (end - start + 1 > longest.length) {
//             longest = str.slice(start, end +1);
//         }
//     }
//     return longest;
// }

// console.log(longestSubstr("aaabnhc")); //ahnhc

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as
// output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

// function longestCountryName(countries) {
//     let longestName = "";
//     for (let i = 0; i < countries.length; i++) {
//         if (countries[i].length > longestName.length) {
//             longestName = countries[i];
//         }
//     }
//     return longestName
// } 

// console.log(longestCountryName(["Australia", "Germany", "United States of America"])); 

// 24. Write a JavaScript function to apply the Bubble Sort algorithm.
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that
// works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if
// they are in the wrong order".
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

// function bubbleSort(arr) {

//     let totalItems = arr.length;

//     for (let i = 0; i < totalItems - 1; i ++) {
//         for (let j =0; j < totalItems - 1 - i; j++) {
//             if (arr[j] < arr[j+1]) {
//                 let sorted = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = sorted;
//             }
//         }
//     }
//     return arr
// } 

// console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])) //  [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'

// function notRepeatChar(str){
//     const charCount = {};

//         for (let char of str) {
//             charCount[char] = (charCount[char] || 0) + 1;
//         }
        
//         for (let char of str) {
//             if (charCount[char] === 1) {
//                 return char;
//             }
//         }
//     return null; 
// }

// console.log(notRepeatChar('abacddbec'));