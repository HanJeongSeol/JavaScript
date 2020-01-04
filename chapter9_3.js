
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


// // 클로저 활용1_ 코드분석

// // 객체 생성하는 생성자 함수
// function HelloFunc(func){
//     this.greeting = "hello";        // ① this 바인딩을 사용해 생성되는 객체에 greeting 프로퍼티 추가
// }

// var userFunc = function(greeting){  // ② 함수를 참조하는 userFunc 변수 생성
//     console.log(greeting);
// }

// /* 
//     ④ HelloFunc함수의 프로토타입으로 call 프로퍼티 생성, call프로퍼티는 func를 인자값으로 하는 함수를 참조한다.
//     func는 객체의 프로퍼티를 탐색한다.
// */
// HelloFunc.prototype.call = function(func){  
//     func ? func(this.greeting) : this.func(this.greeting);
// }

// var objHello = new HelloFunc(); 

// // ③ objHello 객체의 func프로퍼티 생성 후 userFunc변수가 참조하는 함수로 초기화.    
// objHello.func = userFunc;       

// /* 
//     ⑤ call()을 호출하면 call프로퍼티에 저장된 함수가 실행한다. 이 때 func()는 우리가 생성한 userFunc변수가 참조하는 함수.
//     call()을 호출하면 삼항연산자를 사용하여, call의 인자값으로 함수를 넣었다면 그 함수를 실행하고, 넣지 않았다면 objHello.func를 실행합니다.
//     objHello.call() = call의 func프로퍼티를 실행. 이 때 인자값으로 this.greeting, 즉 Hello를 전달한다.
//     objHello.call(userFunc) = call의 인자값으로 userFunc변수 할당. userFunc는 함수를 참조하는 변수
// */
// objHello.call(userFunc);        


// // // 원하는 인자를 넣어서 HelloFunc() 호출하는 방법
// function saySomething(obj, methodName, name){
//     return(function(greeting){
//         return obj[methodName](greeting, name);
//     });
// }

// function newObj(obj,name){
//     // 생성자 호출 시 this는 현재 new로 생성되는 함수
//     obj.func = saySomething(this,"who", name);
//     return obj;
// }

// newObj.prototype.who = function(greeting, name){
//     console.log(greeting + " " + (name || "everyone"));
// }

// var obj1 = new newObj(objHello, "zzoon");
//    /*  var obj1 = new newObj(objHello, "zzoon"); 실행 과정

//         1. objHello.func = saySomething(newObj, "who", "zzoon");
//         2. objHello.func = (function(greeting) { return  obj[methodName](greeting, name);});
//         3. return obj1 = objHello;
//         3-1. 결국 obj1은 objHello 객체에서 func 프로퍼티에 참조된 함수만 바뀐 객체이다. 
//         3-2. func프로퍼티는 원래 greeting만 반환하는 함수였지만, newObj.prototype.who함수가 호출되어 이름까지 출력된다.
//     */
// console.dir(obj1);
// console.dir(newObj);
// console.dir(objHello)
// obj1.call();

// // 클로저 활용 _ Counter

// function makeCounter(predicate){
//     var counter = 0;
//     return function(){
//         counter = predicate(counter);
//         console.dir(predicate);
//         return counter;
//     };
// }

// function increase(n){
//     return ++n;
// }

// function decrease(n){
//     return --n;
// }

// const increaser = makeCounter(increase);
// console.dir(increaser);

// // 함수의 캡슐화
// // 캡슐화 하지 않은 함수
// var buffAr= [
//     'I am ',
//     '',
//     '. I live in ',
//     '',
//     '. I am ',
//     '',
//     ' years old.',
// ];

// function getCompletedStr(name, city, age){
//     buffAr[1] = name;
//     buffAr[3] = city;
//     buffAr[5] = age;

//     return buffAr.join('');
// }

// var str = getCompletedStr('hanjeong', 'incheon', 26);

// console.log(str);

// // 캡슐화를 고려한 함수
// var getCompletedStr = (function(){
//     var buffAr= [
//     'I am ',
//     '',
//     '. I live in ',
//     '',
//     '. I am ',
//     '',
//     ' years old.',
//     ];
//     return (function(name, city, age){
//         buffAr[1] = name;
//         buffAr[3] = city;
//         buffAr[5] = age;

//         return buffAr.join('');
//     });
// })();

// var str = getCompletedStr('hanjeong', 'incheon', 26);
// console.log(str);
// console.dir(getCompletedStr);

// // 클로저 활용 시 주의사항
// 여러번 호출로 값이 변경될 수 있다.
// function outerFunc(argNum){
//     var num = argNum;
//     return function(x){
//         num +=x;
//         console.log('num: ' + num);
//     }
// };

// var exam = outerFunc(40);
// exam(10);
// exam(-10);

// 하나의 클로저가 여러 함수 객체의 스코프 체인에 들어가 있는 경우
function func(){
    var x =1;
    return {
        func1 : function() {console.log(++x)},
        func2 : function(){console.log(--x)}
    };
};

var exam = func();
exam.func1();
exam.func2();