// function outer() {
//     let counter = 0;
//     return function inner() {
//       counter++;
//       console.log(counter);
//       console.log('hello');
//     };
//   }
//   const count = outer(); 
//   count(); // 1
//   count(); // 2

// function createDeposit() {
//     let balance = 0;
//     return {
//       deposit(amount) {
//         balance += amount; 
//       },
//       getBalance() {
//         return balance; 
//       }
//     };
//   }
//   const account = createDeposit();
//   account.deposit(100); 
//   console.log(account.getBalance());
//   console.log(account.balance);

// console.log(score); // Error: Cannot access 'score' before initialization
// let score = 100;


const arr = [1, 2];
function foo1(arg) {
  arg.push(3);
}
foo1(arr);
console.log(arr);

function foo2(arg) {
  arg = [1, 2, 3, 4];
}
foo2(arr);
console.log(arr);

function foo3(arg) {
  let b = arg;
  b.push(3);
}
foo3(arr);
console.log(arr);

function foo4(arg) {
  let b = arg;
  b = [1, 2, 3, 4];
}
foo4(arr);
console.log(arr);
