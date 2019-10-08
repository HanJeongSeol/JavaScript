// let num  = 33;
// let name = "한정"
// let bool = true;
// let undefined_check;
// let null_check = null;
// console.log(typeof(num));
// console.log(typeof(name));
// console.log(typeof(bool));
// console.log(typeof(undefined_check));
// console.log(typeof(null_check));


// // Object()를 사용하여 빈 객체 ob 생성(생성자 함수 사용)
// let ob = new Object();

// // ob객체 프로퍼티 생성
// ob.name = "한정";
// ob.age = 26;
// ob.gender = "male";
// console.log(typeof ob);
// console.log(ob);
// console.log(ob.name);
// ob.name= "설한정";
// console.log(ob.name);
// console.log(Math.pow(2,2));

//// 객체 리터럴 방식으로 객체 생성
// let symbol1 = Symbol('key');
// let symbol2=  Symbol('key');
// let person = {
//     name: "hanjeong",
//     gender: "male",
//     age: 26,
//     isCool: true,
//     favSong: ["비", "너를만나", "Not Over Yet", "이별", "휴가"],
//     favFood: [
//         {
//             name: "burger",
//             rice: false
//         },
//         {
//             name: "coffee",
//             rice: false
//         }
//     ]
// }
// console.log(person.favSong[0]);
// console.log(person.favFood[1].rice);
//프로퍼티 읽기/쓰기/갱신
// let ob = {
//     name : 'hanjeong',
//     age : '20'
// };
// console.log(ob.name);
// console.log(ob[name]);

// ob.name = '한정';
// console.log(ob.name);
// ob[name] = 'hanjeong';
// console.log(ob[name]);

// ob.major = 'computer engineering';
// console.log(ob.major);

// 프로퍼티가 표현식이나 예약어일 경우 대괄호 표기법으로 사용해야한다.
// ob['full-name'] = 'seol hanjeong';
// console.log(ob['full-name']);
// console.log(ob.full-name);

// delete ob.age;
// console.log(ob.age);
// delete ob;
// console.log(ob);

// 객체의 기본타입과 참조타입 비교연산.
// let a = 100;
// let b = 100;
// let objA = {value : 100}; 
// let objB = {value : 100}; 
// let objC = objB;

// console.log(a==b);  //true
// console.log(objA == objB);  // faluse
// console.log(objB == objC);  // true



// person[symbol1] = 'value1';
// person[symbol2] = 'value2';
// console.log(person);
// console.log(person[symbol1] === 'value1');
// console.log(person[symbol2] === 'value2');
// console.log(symbol1 !== symbol2);
// console.log(typeof symbol1 === 'symbol');
// console.log(person);
// console.log(person.favSong[0]);
// console.log(person.favFood[1].rice);
// console.log(person.age);
// person.age = 20;
// console.log(person.age);
// console.log(Math.pow(2, 2));

// let mon = 'monday';
// let tus = 'tusday';
// let wed = 'wednesday';
// let day = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
// document.write("today is "+mon+"<br>");
// document.write("today is "+day[0]);
// let arr = new Array('string', 1, true);
// console.log(typeof arr[0]);     //string
// console.log(typeof arr[1]);     //number
// console.log(typeof arr[2]);     //boolen
// console.log(arr.length);
// console.log(typeof arr);

// arr.push()
// arr[3] = ""
// arr[arr.length]=
