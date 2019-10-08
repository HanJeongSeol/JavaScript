// 콜백 함수

// let plus = function(a,b,callback){
//     let result  = a+b;
//     callback(result);
// }

// plus(5,10,function(res){
//     console.log(res);
// };

// (function (name){
//     console.log('즉시실행함수 -> ' + name)
// })('hanjeong');

// 내부 함수

// function parent(){
//     let a = 100;
//     let b =200;

//     function child(){
//         let b = 300;
//         console.log(a);
//         console.log(b);
//     }
//     child();
// }

// parent();  // 100 300
// child();   // child is not defined

// 함수 스코프 외부에서 내부 함수 호출

// function parent(){
//     let a = 100;
//     let child = function(){
//         console.log(a);
//     }

//     return child;
// }

// let inner = parent();
// inner();

// 함수를 리턴하는 함수

// let self = function(){
//     console.log(a);
//     return function(){
//         console.log(b);
//     }
// }

// self = self();
// self();