// function add(x,y){
//     return x + y;
// }

// add.result = add(3,2);
// add.status = 'OK';

// console.log(add.result);    // 5
// console.log(add.status);    // OK
// console.dir(add);

// 변수, 프로퍼티 할당

// let n = 100;
// let b = function(){return 100;};
// console.log(b);     // f(){return 100}
// console.log(b());   // 100

// let obj = {};
// obj.b = function(){return 200;};
// console.log(obj.b);     // f(){return 200}
// console.log(obj.b());   // 200

// 함수의 인자로 전달

// let b = function(func){     // 인자로 받은 함수를 호출
//     func();
// }

// b(function(){               // 익명함수의 형태
//     console.log('Function can be used as the argument');
// });


 // 리턴값으로 활용

//  let b = function(){
//      return function(){
//          console.log('function is the return value');
//      };
//  };

//  let r = b();
// r();

// 함수 객체의 기본 프로퍼티

// function add(x,y){
//     return x + y;
// }

// console.dir(add);