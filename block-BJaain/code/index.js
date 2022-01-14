console.log(this.document === document); // Output true

// ------------

console.log(this === window); //Output //true

// ------------

var myFunction = function () {
  console.log(this);
};
myFunction(); // Output window

// ------------

function f1() {
  'use strict';
  return this;
}
console.log(f1() === window); //false because of use strict

// ------------

function foo() {
  console.log('Simple function call');
  console.log(this === window);
} 

foo(); //Output true

// ------------

// This for IIFE
(function () {
  console.log('Anonymous function invocation');
  console.log(this === window);
})(); true

// ------------

var myObject = {};
myObject.someMethod = function () {
  console.log(this);
};
myObject.someMethod(); //Value Of This //{}

// ------------

function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;

  this.displayName = function () {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  };
}

let person = new Person('John', 'Reed');
person.displayName(); // Name:John Reed
let person2 = new Person('Paul', 'Adams');
person2.displayName(); // Name:Paul Adams

// ------------

function foo() {
  'use strict';
  console.log('Simple function call');
  console.log(this === window);// false
}

let user = {
  count: 10,
  foo: foo,
  foo1: function () {
    console.log(this === window);
  },
};

user.foo(); // false beacuse no equal to window
let fun1 = user.foo1;
fun1(); // true because nothing before this even in default binding
user.foo1(); //false 

// ------------

this.x = 9;
var obj = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

obj.getX(); // Output ?? //81

var retrieveX = obj.getX;
retrieveX(); //9 no rule is applied

var boundGetX = retrieveX.bind(obj);
boundGetX(); // 81  because of binding

// ------------

function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;

  this.displayName = function () {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  };
}

let person = new Person('John', 'Reed');
person.displayName(); // same as above
let person2 = new Person('Paul', 'Adams');
person2.displayName();

person.displayName.call(person2); // JOhn reed because new has priority

// ------------

const a = {
  a: 'a',
};
const obj = {
  getThis: () => this,
  getThis2() {
    return this;
  },
};
obj.getThis3 = obj.getThis.bind(obj);
obj.getThis4 = obj.getThis2.bind(obj);

// Output
obj.getThis(); windiw

// Output
obj.getThis.call(a); window because arrow function

// Output
obj.getThis2(); //obj willl be returned

// Output
obj.getThis2.call(a); a

// Output
obj.getThis3();//window bwcause arrow function

// Output
obj.getThis4();//obj will be returned

// -------------

let person = {
  name: 'Jay',
  greet: function () {
    console.log('hello, ' + this.name);
  },
};

person.greet(); // hello jay

let greet = person.greet;
greet(); // hello + "empty string" because window will default to empty string

// -------------

let name = 'Jay Global';
let person = {
  name: 'Jay Person',
  details: {
    name: 'Jay Details',
    print: function () {
      return this.name;
    },
  },
  print: function () {
    return this.name;
  },
};
console.log(person.details.print()); // jay details 
console.log(person.print()); // jay person

let name1 = person.print; 
let name2 = person.details;
 
console.log(name1()); // window becuase function refre
console.log(name2.print()); // error

// --------

let outerFn = function () {
  let n = 5;
  console.log(innerItem);
  let innerFn = function () {
    let innerItem = 'inner';
    console.log(n);
  };
  return innerFn;
};

outerFn()();//is it window?

// -----------

let object = {
  data: [1, 2, 3],
  dataDouble: [1, 2, 3],
  double: function () {
    console.log('this inside of outerFn double()');
    console.log(this);
    return this.data.map(function (item) { //window
      console.log(this); 
      return item * 2;
    });
  },
  doubleArrow: function () {
    console.log('this inside of outerFn doubleArrow()');
    console.log(this);
    return this.dataDouble.map((item) => {
      console.log(this); // object
      return item * 2;
    });
  },
};

object.double(); //this is whole object in thid
object.doubleArrow();

// --------------

let bobObj = {
  name: 'Bob',
};

function print() {
  return this.name;
}

let printNameBob = print.bind(bobObj);
console.log(printNameBob()//Bob

// -------------------

let obj1 = {
  data: [1, 2, 3],
  printFirstData: function () {
    if (this.data.length) return this.data[0];
  },
};

let obj2 = {
  data: [4, 5, 6],
  printSecondData: function () {
    if (this.data.length > 1) return this.data[1];
  },
};

let getSecondData = obj2.printSecondData.bind(obj1);
console.log(getSecondData()); // 2

// --------------

const call = {
  caller: 'mom',
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

call.says(); // Hey mom just called

// -----------------

const call = {
  caller: 'mom',
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall = call.says;

newCall(); // hey undefined just called

//  -----------------

function anotherCaller() {
  console.log(`${this.caller} called, too!`);
}

const call = {
  caller: 'mom',
  anotherCaller: anotherCaller,
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall = call.anotherCaller; 

newCall(); // another caller just called
