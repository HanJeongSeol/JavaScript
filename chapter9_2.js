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
// function HelloFunc(func){
//     this.greeting = "hello";
// }


// var userFunc = function(greeting){
//     console.log(greeting);
// }

// HelloFunc.prototype.call = function(func){
//     // this.func와 this.greeting의 this는 생성된 인스턴스를 가리킨다.
//     func ? func(this.greeting) : this.func(this.greeting);
// }

// var objHello = new HelloFunc();     // 생성자 new를 이용한 objHello 함수 생성
// objHello.func = userFunc;       // objHello에 func프로퍼티 추가, func프로퍼티는 greeting를 출력하는 함수
// objHello.call();        // HelloFunc의 프로토타입 프로퍼티에 저장된 call 호출, call은 func, 즉 userFunc가 참조하는 함수를 인자로 받음
// console.dir(objHello);  
// console.dir(HelloFunc);
// console.dir(userFunc);
// console.dir(HelloFunc.prototype.call);

// function saySomething(obj, methodName, name){
//     return (function(greeting){
//         return obj[methodName](greeting,name);
//     });
// }

// function newObj(obj,name){
//     obj.func = saySomething(this,"who", name);
//     return obj;
// }

// newObj.prototype.who = function(greeting, name){
//     console.log(greeting + " " + (name || "everyone"));
// }

// var obj1 = new newObj(objHello, "zzoon");

// obj1.call();
// console.dir(obj1);
// console.dir(objHello);
// console.dir(window);
// console.dir(HelloFunc.prototype.call);

// // 클로저를 사용하지 않고 배열에 함수 넣기
// var arr = [];

// for(var i = 0; i<5; i++){       // 반복문에서 클로져는 반복문이 끝난 시점
//     console.log(i);
//     arr[i] = function(){
//         return i;
//     }
// }

// for(var index in arr){
//     console.log(arr[index]());
// }

// console.dir(arr);

// // 클로저를 사용하여 배열에 함수 넣기
var arr = [];
for(var i = 0; i < 5; i++){
    arr[i] = function(id) {
        return function(){
            return id;
        }
    }(i);   // 즉시실행함수
}
for(var index in arr) {
    console.log(arr[index]());
}

console.dir(arr[1]);
