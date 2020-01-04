// // 클래스와 생성자 역할을 하는 함수
// function Person(arg){
//     this.name = arg;

//     this.getName = function(){
//         return this.name;
//     }

//     this.setName = function(value){
//         this.name = value;
//     }
// }

// var me = new Person('hanjeong');
// console.log(me.getName());  // hanjeong
// me.setName('seolhanjeong');
// console.log(me.getName());  // seolhanjeong

// // 프로토타입에 메서드 추가
// function Person(arg){
//     this.name = arg;

//     Person.prototype.getName = function(){
//         return this.name;
//     }

//     Person.prototype.setName = function(value){
//         this.name = value;
//     }
// }

// var me = new Person('me');
// var you = new Person('you');
// console.log(me.getName());
// console.log(you.getName());

// // 프로토타입을 이용한 상속
var Parent = (function(){
    // 생성자(Constructor)
    function Parent(name){
        this.name = name;
    }

    // 메서드
    Parent.prototype.sayHi = function(){
        console.log('Hi! ' + this.name);
    };

    // 생성자 반환
    return Parent;
}());

// create의 인자값은 프로토타입입니다.
var child = Object.create(Parent.prototype);
child.name = 'child';

child.sayHi();

console.log(child instanceof Parent);