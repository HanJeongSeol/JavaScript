// 메서드 호출 사용 시 this 바인딩

// let myObj = {
//     name : 'hanjeong',
//     sayName : function(){
//         console.log(this.name);
//     }
// };

// let otherObj = {
//     name : 'check'
// };

// otherObj.sayName = myObj.sayName;

// myObj.sayName();        // hanjeong
// otherObj.sayName();     // check
// console.dir(myObj);
// console.dir(otherObj);

// 전역 객체와 전역 변수의 관계

// var name = "hanjeong";  // 전역 변수 선언
// console.log(name);      // hanjeong
// console.log(window.name);   // hanjeong

// 함수 호출 시 this 바인딩

// var test = "This is test";
// console.log(window.test);       // 전역 객체 window에 바인딩 된 test 프로퍼티 호출

// let sayName = function(){
//     console.log(this.test);     // sayName() 함수 호출 시 this는 전역 객체에 바인딩 됩니다.
// };
// sayName();

// 내부 함수의 this 바인딩 동작

// var value = 100;

// let myObj = {
//     value : 1, 
//     func1: function(){
//         this.value +=1;
//         console.log('func1() called. this.value :' + this.value);

//         // func2() 내부함수
//         func2 = function () {
//             this.value+=1;
//             console.log('func2() called. this value : ' + this.value);

//             // func3() 내부함수
//             func3 = function(){
//                 this.vlaue+=1;
//                 console.log('func3() called. this value : ' + this.value);
//             }
//             func3();
//         }
//         func2();
//     }
// };

// myObj.func1();


// 내부 함수의 this 바인딩 문제를 해결한 코드

// var value = 100;

// let myObj = {
//     value:1,
//     func1 : function() {
//         var that = this;
//         this.value +=1;
//         console.log('func1() called. this.value : ' + this.value);

//         func2 = function(){
//             that.value +=1;
//             console.log('func2() called. this.value : ' + that.value);

//             func3 = function(){
//                 that.value +=1;
//                 console.log('func3() called. this.value : ' + that.value);
//             }
//             func3();
//         }
//         func2();
//     }
// };

// myObj.func1();
// console.dir(myObj);

// 생성자 함수의 동작 방식
// let Person = function (name){
//     // 함수코드 실행 전
//     this.name =name;
//     // 함수리턴
// };

// // 객체 생성
// let foo = new Person('hanjeong');
// console.log(foo.name);      // hanjeong
// console.dir(foo);


// 객체 리터럴 방식과 생성자 방식 차이

// // 리터럴 방식으로 객체 생성
// let foo = {
//     name: 'hanjeong',
//     age: 35,
//     gender: 'man'
// };

// console.dir(foo);

// // 생성자 함수 방식
// function Person(name, age, gender, position){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// };

// // Person 생성자 함수를 이용해 bar 객체, baz 객체 생성
// let bar = new Person('bar',33,'man');
// console.dir(bar);

// let baz = new Person('baz', 34,'woman');
// console.dir(baz);


//생성자 함수를 new를 붙이지 않고 호출한 경우

// function Person(name, age, gender, position){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// };

// let qux = Person('qux', 20,'woman');
// console.log(qux);       // undefined

// console.log(window.name);   // qux
// console.log(window.age);    // 20
// console.log(window.gender); // woman

// // apply() 메서드를 이용한 명시적인 바인딩

// //생성자 함수
// function Person(name, age, gender, position){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// };

// // 빈 객체 foo 생성
// let foo = {};

// // apply() 메서드 호출
// Person.apply(foo, ['foo', 30, 'man']);
// console.dir(foo);

// apply() 메서드를 사용한 arguments 객체의 배열 표준 메서드 slice() 활용 코드

// function myFucntion(){
//     console.dir(arguments);


// // arguments.shift(); // 에러발생

// // arguments 객체를 배열로 변환
// let args = Array.prototype.slice.apply(arguments);
// console.dir(args);
// }

// myFucntion(1,2,3);


// //  return문 없는 일반 함수의 리턴값 확인
// let noReturnFunc = function (){
//     console.log('This function has no return statement.');
// };

// let result = noReturnFunc();
// console.log(result);        // This function has no return statement. | undefined

// // 생성자 함수에서 명시적으로 객체를 리턴했을 경우
// function Person(name, age, gender){
//     this.name = name;
//     this.age = age;
//     this.gender= gender;

//     // 명시적으로 다른 객체 반환
//     return{name:'bar', age:20,gender:'woman'};
// }

// let foo = new Person('foo', 30, 'man');
// console.dir(foo);       // return으로 지정한 객체 반환


// 생성자 함수에서 명시적으로 기본타입 값을 리턴했을 경우
// function Person(name, age, gender){
//     this.name = name;
//     this.age = age;
//     this.gender= gender;

//     // 명시적으로 기본타입 반환
//     return 100;
// }

// let foo = new Person('foo', 30, 'man');
// console.dir(foo);       // foo 객체 반환

  
