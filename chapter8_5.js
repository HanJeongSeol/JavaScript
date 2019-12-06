// prototype 프로퍼티와 [[prototype]] 링크 구분

// // Person 생성자 함수
// function Person(name) {
//     this.name = name;
// }

// // myname 객체 생성
// let myname = new Person('hanjeong');

// console.dir(Person);
// console.dir(myname);
// console.log(Person.prototype === myname.__proto__);     // true

// // 객체 리터럴 방식에서의 프로토타입 체이닝
// let myObject = {
//     name : 'hanjeong',
//     sayName: function(){
//         console.log('My name is ' + this.name);
//     }
// }

// myObject.sayName();         // My name is hanjeong
// console.log(myObject.hasOwnProperty('name'));      // true
// console.log(myObject.hasOwnProperty('nickname'));  // false
// myObject.sayNickName();     // Uncaught TypeError: myObject.hansOwnProperty is not a function
// console.dir(myObject);
// console.dir(Object.prototype);


// // 생성자 함수로 생성된 객체의 프로토타입 체이닝
// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     this.sayName = function(){
//         console.log("My name is " + this.name);
//     };
// };

// let foo = new Person('hanjeong', 23);
// foo.sayName();
// console.log(foo.hasOwnProperty('name'));
// console.dir(Person);
// console.dir(foo);
// console.dir(Function.prototype);
// console.log(foo.__proto__ === Person.prototype);        // ture
// console.log(Person.__proto__ === Function.prototype);   // true
// console.log(Person.prototype.__proto__ === Object.prototype);   //true
// console.log(Person.prototype.constructor === Person);   // true
// console.log(Function.prototype.__proto__ === Object.prototype); // true

// 기본 데이터 타입 확장

// String.prototype.testMethod = function(){
//     console.log('This is the String.prototype.testMethod()');
// };

// let str = "This is test";
// str.testMethod();

// console.dir(String.prototype);

// // 데이터 확장의 이유
// function Person() {
//     this.colleage='INU';
//     this.location='INCHEON';
// };

// let first = new Person();
// let second = new Person();

// console.log(first.colleage);    // INU
// console.log(second.colleage);   // INU

// console.dir(Person);
// console.dir(first);
// console.dir(second);

// function Person_2(){};
// Person_2.prototype.colleage = 'INU';
// Person_2.prototype.location = 'INCHEON';

// let first_2 = new Person_2();
// let second_2 = new Person_2();
// console.log(first_2.colleage);    // INU
// console.log(second_2.colleage);   // INU

// console.dir(Person_2);
// console.dir(first_2);
// console.dir(second_2);

// // 프로토타입 메서드와 this 바인딩
// function Person(name){
//     this.name = name;
// }

// // getName() 프로토타입 메서드
// Person.prototype.getName = function(){
//     return this.name;
// };

// // 객체 생성
// let foo = new Person('foo');
// console.log(foo.getName());     // foo

// //Person.prototype 객체에 name 프로퍼티 동적 추가
// Person.prototype.name = 'hanjeong';
// console.log(Person.prototype.getName());    // hanjeong
// console.log(foo.getName());     // foo

// // 디폴트 프로토타입은 다른 객체로 변경이 가능하다.
// function Person(name){
//     this.name = name;
// }
// console.log(Person.prototype.constructor);  // Person(name);
// // foo 객체 생성
// let foo = new Person();

// console.log(foo.country);   // undefined

// // 디폴트 프로토타입 변경
// Person.prototype = {
//     country : 'korea',
// };
// console.log(Person.prototype.constructor);  // Object()

// // bar 객체 생성
// let bar = new Person();
// console.log(foo.country);       // undefined
// console.log(bar.country);       // korea
// console.log(foo.constructor);   // Person(name)
// console.log(bar.constructor);   // Object()


// 객체의 프로퍼티 읽기나 메서드를 실행할 때만 프로토타입 체이닝이 동작한다
function Person(name){
    this.name = name;
}

Person.prototype.country = 'korea';

let foo = new Person('foo');
let bar = new Person('bar');

console.log(foo.country);   // korea
console.log(bar.country);   // korea

foo.country = 'USA';

console.log(foo.country);   // USA
console.log(bar.country);   // korea
