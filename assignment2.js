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

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number
// of occurrences of the specified letter within the string.
// Sample arguments : 'microsoft.com'
// 'o'
// Expected output : 3

// function letterOccurrences(str) {
//     const counts = {};
//     let maxCount=0;

//     for (let char of str) {

//         counts[char] = (counts[char] || 0) + 1;
//         if (counts[char] > maxCount) {
//             maxCount = counts[char];
//         }
//     }
//     return maxCount;
// }

// console.log(letterOccurrences('microsoft.com'))
// console.log(letterOccurrences('goodmorning'))

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string
// in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

// function titleCase(str)
// 1. Accept a string as input.
// 2. Break the string into words using split(" ").
// 3. Loop through each word.
// 4. Convert the first character to uppercase and combine it with the rest of the word.
// 5. Join the words back into a single string and return the result.

// function titleCase(str){
//     const words = str.split(" ");

//     const uppercasedWord = words.map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     return uppercasedWord.join(" ");
// }

// console.log(titleCase("today is a good day"))

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

// function generatedId(length) {
//     const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '' // this to hold new string ID

//     for (let i = 0; i < length; i++) { //loop through length times
//         const randomIndex = Math.floor(Math.random()* characters.length); //pick randome char from the list 
//         result += characters[randomIndex] // add those random char to the string
//     }
//     return result
// }

// console.log(generatedId(4));
// console.log(generatedId(6));

// 19. Write a JavaScript function that returns array elements larger than a number . 

// function filteredLargerNumbers(arr, num){
//     const result = [];

//     for (let i= 0; i < arr.length; i++) {
//         if (arr[i] > num) {
//             result.push(arr[i]);
//         }
//     }
// return result;
// }

// console.log(filteredLargerNumbers([1,7,3,4,5], 2));

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.


// function binarySearch(arr, target){

//     let left = 0;
//     let right = arr.length - 1;
    

//     while (left <= right) {
//         const mid = Math.floor((left+right) /2); 

//         if (arr[mid] === target) {
//             return mid;
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return null;
// }
// const sortedArr = [1, 3, 5, 7, 9, 11];

// console.log(binarySearch(sortedArr,7))


// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

// function letterOccurrences(str){
//  const counts = {} //to hold the counts of each letter

//  for (let char of str) {
//     // if (char === '') continue;
//     counts[char] = (counts[char] || 0) + 1;
//  }
//  return counts
// }

// console.log(letterOccurrences("hello world"));

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"


// function extractChar(str){
//     let unique = " ";

//     for (let char of str) {
//         if (!unique.includes(char)) {
//             unique += char;
//         }
//     }
//     return unique;
// }

// console.log(extractChar("thequickbrownfoxjumpsoverthelazydog"));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order .
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// function orderedLetters(str) {
//     return str.split("").sort().join("");
// }
// console.log(orderedLetters("webmaster"));

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1

// function amountTocoins(amount, coins){
//     const result = [];

//     for (let i = 0; i < coins.length; i ++) {
//         while (amount >= coins[i]){
//             result.push(coins[i]);
//             amount -= coins[i];
//         }
//     }
//     return result;
// }

// console.log(amountTocoins(46, [25, 10, 5, 2, 1]));

// 13. Write a JavaScript function to compute the factors of a positive integer .

function computePositiveFactors(num){
    const factors = [];

    for ( let i = 1; i <= num; i ++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

console.log(computePositiveFactors(12));