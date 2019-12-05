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

// 객체 리터럴 방식에서의 프로토타입 체이닝
let myObject = {
    name : 'hanjeong',
    sayName: function(){
        console.log('My name is ' + this.name);
    }
}

myObject.sayName();
console.log(myObject.hansOwnProperty('name'));
console.log(myObject.hansOwnProperty('nickname'));