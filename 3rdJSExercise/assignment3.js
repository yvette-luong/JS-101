// map() 
// double each number in an array and return a new value

// Array.prototype.myMap = function (callback) {
//     const result = []; 

//     for (let i = 0; i < this.length; i++) {
//         result.push(callback(this[i], i, this));
//     }
//     return result;
// };

const values = [4,5,6,7,8,9,1]; 
// const doubled = values.myMap(values => values * 2);

// console.log(doubled)


//filter()
// filter out unmatch numb

// Array.prototype.myFilter = function(callback){
//     const result = [];

//     for (let i = 0; i < this.length; i ++) {
//         if (callback(this[i], i , this)) {
//             result.push(this[i]);
//         }
//     }
//     return result;
// }

// const filter = values.myFilter(values => values > 1); //use the values array above

// console.log(filter)

//reduce()
//reduce the array with 1 value, sum everything

// Array.prototype.myReduce = function(callback, initialValue) {
//     let acc = initialValue;
//     console.log (`show initial accumulator: ${acc}`)
//     for ( let i = 0; i < this.length; i ++) {
//         acc = callback(acc, this[i], i, this);
//     }
//     return acc;
// }

// const sum = values.myReduce((acc, val) => acc + val, 0)
// console.log("acc result", sum)

//includes()
//check if array contains a value
// Array.prototype.myIncludes = function(value) {
//     for (let i = 0; i < this.length; i ++) {
//         if (this [i] === value) return true;
//     }
//     return false;
// };

// const checkValue = values.myIncludes(7);
// console.log("is it number is the values array?", checkValue);

//find()
//find the first even number
// Array.prototype.myFind = function(callback) {
//     for (let i = 0; i < this.length; i++ ){
//         if (callback(this[i], i, this)) {
//             return this[i];
//         }
//     }
//     return undefined; 
// }

// const firstEvenNum = values.myFind(value => value % 2 === 0);
// console.log(firstEvenNum) //4


//slice()
// note to self: Includes the value at startIndex, but stops before endIndex

// Array.prototype.mySlice = function(startIndex = 0, endIndex = this.length) {
//     const result = [];
    
//     startIndex = startIndex < 0 ? this.length + startIndex : startIndex;
//     endIndex = endIndex < 0 ? this.length + endIndex : endIndex;

//     for (let i = startIndex; i < endIndex && i< this.length; i ++) {
//         result.push(this[i]);
//     }
//     return result;
// }

// const sliced = values.mySlice(1,4)
// console.log(sliced);
