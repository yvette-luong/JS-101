// ==================== JS Day 3 ============================

/** JavaScript prototypal inheritance **/
 // const p = {
 //   greeting() {
 //     console.log(`hello from ${this.name}`);
 //   },
 // };
 
 // const person = {
 //   name: "alice",
 //   __proto__: p,
 // }; // person -> p
 
 // person.greeting();
 // console.log(person.greeting);
 
 // const person2 = {
 //   name: "bob",
 //   greeting: "hello",
 //   __proto__: p,
 // };
 // // person2 -> person2.__proto__/p -> Object.prototype -> null
 // console.log(person2.greeting);
 // console.log(person2);
 
 // class keyword is syntax sugar
 
 // constructor function/ class
 
 // function Person(name) {
 //   this.name = name;
 
 //   // const p = {};
 //   // p.name = name;
 //   // p.__proto__ = Person;
 //   // return p
 // }

 // const p1 = new Person("alice");
 // console.log(p1);
 
 // // factory function
 // function Person2(name) {
 //   const p = {};
 //   p.name = name;
 //   p.greeting = function () {
 //     console.log(`hello from ${this.name}`);
 //   };
 //   return p;
 // }
 
 // const p2 = Person2("bob");
 // console.log(p2);
 
 // class keyword
 // abstraction, polymorphism, inheritance, encapsulation
 // no abstraction in js
 // inheritance, extends keyword
 // polymorphism: overloading, overriding
 // no overloading in js: same method name, different arguments and implementation
 // overriding: same method in child and parent class, but different implementation
 // encapsulation: hiding information from the outside of the class

//  class Person {
//     #age;
//     static count = 0;
//     constructor(name, age) {
//       this.name = name;
//       this.#age = age;
//       Person.count++;
//     }
  
//     greeting() {
//       console.log(`hello from ${this.name}, age: ${this.#age}`);
//     }
  
//     // setter
//     set age(newAge) {
//       console.log("in age setter method");
//       this.#age = newAge;
//     }
  
//     // getter
//     get age() {
//       console.log("in age getter method");
//       return this.#age;
//     }
  
//     static getCount() {
//       return Person.count;
//     }
//   }

// const p1 = new Person("alice", 18);
//  p1.greeting();
//  console.log(p1.name);
//  p1.age = 10;
//  console.log(p1.age);
 
//  const p2 = new Person("bob", 20);
 // p2.greeting();
 
 // p1.greeting = function () {
 //   console.log("hi");
 // };
 
 // p1.greeting();
 // p2.greeting();
 
 // console.log(p1);
 
//  class Student extends Person {
//    constructor(name, id) {
//      super(name);
//      this.id = id;
//    }
 
//    greeting() {
//      console.log(`hello from student ${this.name}`);
//    }
//  }
 
//  const s1 = new Student("charlie", 1);
//  // s1 -> Student -> Person -> Object.Prototype -> null
//  console.log(s1);
 
 // instance methods
//  s1.greeting(); // calling on an instance, usually will do something about the instance
 
 //s1.__proto__ // -> Student
 
//  s1.__proto__.walk = function () {
//    console.log(`${this.name} is walking...`);
//  };
 
//  s1.walk();
 
//  // prototype
//  Student.prototype.run = function () {
//    console.log(`${this.name} is running...`);
//  };


//  s1.run();
 
 // instance.__proto__ == class.prototype
 
 // static methods: called directly on the constructor function itself
 // they are usually utility functions
//  console.log(Person.getCount());
 
 // Object.keys();
 // Object.values();
 // Object.entries();
 
//  const arr = [1, 2, 3, 4, 5];
//  console.log(arr);
 
//  const result = arr.forEach((value, index, array) => {
//    console.log(value, index, array);
//  });
 

//  console.log(result);
 
//  arr.__proto__.myForEach = function (cb) {
//    for (let i = 0; i < this.length; i++) {
//      cb(this[i], i, this);
//    }
//  };
 
//  arr.myForEach((value, index, array) => {
//    console.log(value, index, array);
//  });
 
 // array methods: filter, map, reduce, slice, splice, push, pop, join, fill
 
 // ways to loop through an array
 /**
  * 1. for loop
  * 2. forEach, map, filter, reduce
  * 3. while
  */

//  Concept            | Keyword/Code Used       | Description
//  Encapsulation      | #age, get age()         | Hide private fields
//  Inheritance        | extends, super()        | Student inherits from Person
//  Polymorphism       | Method overriding       | Student redefines greeting()
//  Static method      | static getCount()       | Belongs to class, not instance
//  Prototype          | __proto__, .prototype   | Add methods dynamically
//  Custom Array Loop  | myForEach               | Extends array prototype manually


// Homework: Refer to my example and documentation, implement your own version of these array instance methods: map, filter, reduce, includes, find, slice.


