// var x = 'xxx';
// function foo () {
//   var y = 'yyy';
//   function bar () {
//     var z = 'zzz';
//     console.log(x + y + z);
//   }
//   console.dir(bar);

//   bar();
// }
// foo();
// console.dir(foo);
// console.dir(window);

// let x = 'xxx';
// function foo () {
//     let y = 'yyy';

//   function bar () {
//     let z = 'zzz';
//     console.log(x + y + z);
//   }
//   bar();
//   console.dir(bar);
//   console.log(bar);
// }
// foo();

// console.dir(foo);

// function first(a,b){
// 	console.log(a+b);
// }
// first(3,4); 
// console.dir(window);


// // 렉시컬 환경
// function printName() {
//     return 'hanjeong'
//   }
  
//   function findName() {
//     return printName()
//   }
  
//   function sayMyName() {
//     return findName()
//   }

//   function print(){
//       function printName(){
//           return 'Hyunso';
//       }
//   }
  
//   console.log(sayMyName());

// // 함수 호이스팅_1

// console.log(foo);       // undefined
// console.log(sayName());     // hanjeong

// var foo = 'hanjeong';

// function sayName(){
//     return 'hanjeong';
// }

// // 함수 호이스팅_2
// var foo = undefined;
// function sayName(){
//     return 'hanjeong';
// }

// console.log(foo);       // undefined
// console.log(sayName());     // hanjeong

// var foo = 'hanjeong';

// // 함수 호이스팅_3

// console.log(foo);       // ReferenceError
// console.log(sayName());     // hanjeong

// let foo = 'hanjeong';

// function sayName(){
//     return 'hanjeong';
// }


// // 함수 호이스팅_4
// console.log(sayName2);  // undefined
// console.log(sayName2());    // Uncaught TypeError: sayName2 is not a function
// console.log(sayName()); // hanjeong

// // 함수 표현식
// var sayName2 = function(){
//     return 'hanjeong';
// };
// // 함수 선언식
// function sayName(){
//     return 'hanjeong';
// }


// // 함수 호이스팅_5
// var favouriteFood = 'grapes';

// var foodThoughts = function () {
//   console.log("Original favourite food: " + favouriteFood); // undefined
  
//   var favouriteFood = 'sushi';
//   console.log("New favourite food: " + favouriteFood); // sushi
// };

// foodThoughts();

// // 함수 호이스팅_5의 컨텍스트

// // global 실행 컨텍스트
// var favouriteFood = undefined; // hoisting
// var foodThoughts = undefined; // hoisting

// favouriteFood = 'grapes';

//       // foodThought 실행 컨텍스트
//       foodThoughts = function () {
//         var favouriteFood = undefined; // hoisting
//         console.log("Original favourite food: " + favouriteFood);

//         favouriteFood = 'sushi';
//         console.log("New favourite food: " + favouriteFood);
//       };
//       // foodThought 실행 컨텍스트
// // global 실행 컨텍스트

// foodThoughts();


