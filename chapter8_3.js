// argument 객체

// function func1(arg1, arg2){
//     console.log(arg1,arg2);
// }

// func1();        // undefined undefined
// func1(1);       // 1 undefined
// func1(1,2);     // 1 2
// func1(1,2,3);   // 1 2

// 유사 배열 객체

// let arr = ['bar'];
// let obj = {
//     name : 'han',
//     length : 1
// };

// arr.push('baz');    
// console.log(arr);       // ['bar', 'baz']
// obj.push('baz');        // error

// 유사 배열 객체 2

// let arr = ['bar'];
// let obj = {
//     name : 'han',
//     length : 1
// };

// arr.push('baz');    
// console.log(arr);       // ['bar', 'baz']
// Array.prototype.push.apply(obj,['baz']);
// console.log(obj);       // {'1' : ''baz', name : 'han', length : 2}

// 배열의 프로퍼티 동적 생성

// let arr = ['zero', 'one', 'two'];
// console.log(arr.length);    // 3

// arr.color = 'blue';
// arr.name = 'number_array';
// console.log(arr.length);        // 3

// arr[3] = 'red';
// console.log(arr.length);        // 4

// console.dir(arr);       // 배열도 객체처럼 key : value 형태로 배열 원소 및 프로퍼티 존재

// for(let prop in arr){
//     console.log(prop, arr[prop]);
// }       // 프로퍼티까지 출력

// for(let prop=0; prop<arr.length; prop++){
//     console.log(prop, arr[prop]);
// }       // 배열의 요소만 출력

// arguments 객체 에제 코드

// function add(a,b){
//     console.dir(arguments);
//     return a+b;
// }

// console.log(add(1));        // NAN -> length : 1
// console.log(add(1,2));      // 3   -> length : 2
// console.log(add(1,2,3));    // 3   -> length : 3

// 매개변수 개수가 정해지지 않은 함수

// function sum(){
//     let result = 0;
//     for(let i = 0; i<arguments.length; i++){
//         result += arguments[i];
//     }

//     return result;
// }

// console.log(sum(1,2,3));        // 6
// console.log(sum(1,2,3,4,5));    // 15