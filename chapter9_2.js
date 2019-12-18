// // 함수에서 내부함수 실행 후 종료
// function outerFunc(){
//     var x = 10;
//     var innerFunc = function(){
//         console.log(x);
//     }
//     innerFunc();
// }

// outerFunc();

// // 외부 함수에서 내부 함수 반환하는 경우
// function outerFunc(){
//     var x = 10;
//     var innerFunc = function(){
//         console.log(x);
//     }
//     return innerFunc;
// }

// var inner = outerFunc();
// inner();
// console.dir(outerFunc);
// console.dir(inner);

// // 클로저 실습
// function outerFunc(arg1, arg2){
//     var local = 8;
//     function innerFunc(innerArg){
//         console.log((arg1+arg2) / (innerArg+local));
//     }
//     return innerFunc;
// }

// var exam1 = outerFunc(10,20);
// exam1(2);   // 3

// // 클로저 활용_1
function HelloFunc(func){
    this.greeting = "hello";
}


var userFunc = function(greeting){
    console.log(greeting);
}

HelloFunc.prototype.call = function(func){
    func ? func(this.greeting) : this.func(this.greeting);
}

var objHello = new HelloFunc();     // 생성자 new를 이용한 objHello 함수 생성
objHello.func = userFunc;
objHello.call();
// console.dir(objHello);
// console.dir(HelloFunc);

function saySomething(obj, methodName, name){
    return (function(greeting){
        return obj[methodName](greeting,name);
    });
}

function newObj(obj,name){
    obj.func = saySomething(this,"who", name);
    return obj;
}

newObj.prototype.who = function(greeting, name){
    console.log(greeting + " " + (name || "everyone"));
}

var obj1 = new newObj(objHello, "zzoon");

obj1.call();

console.dir(obj1);
console.dir(window);
console.dir(HelloFunc.prototype.call);
// var arr = [];

// for(var i = 0; i<5; i++){
//     arr[i] = function(){
//         return i;
//     }
// }

// for(var index in arr){
//     console.log(arr[index]());
// }

// console.dir(arr);

// var arr = []
// for(var i = 0; i < 5; i++){
//     arr[i] = function(id) {
//         return function(){
//             return id;
//         }
//     }(i);   // 즉시실행함수
// }
// for(var index in arr) {
//     console.log(arr[index]());
// }