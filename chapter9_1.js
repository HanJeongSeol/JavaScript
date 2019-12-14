// // 전역 실행 컨텍스트 스코프 체인
// var var1 = 1;
// var var2 = 2;

// console.log(var1);  // 1
// console.log(var2);  // 2


// // 함수를 호출한 경우 생성외는 실행 컨텍스트의 스코프 체인
// var var1 = 1;
// var var2 =2;

// function func(){
//     var var1 = 10;
//     var var2 = 20;
//     console.log(var1);  // 10
//     console.log(var2);  // 20
// }
// func();
// console.log(var1);  // 1
// console.log(var2);  // 2

// // 함수 내의 함수 스코프 체인
// var value = "value1";

// function printFunc(){
//     var value = "value2";

//     function printValue(){
//         return value;
//     }
//     console.log(printValue());
// }

// printFunc();

// 전역 필드에서의 함수 
var value = "value1";

function printValue(){
    return value;
}

function printFunc(func){
    var value = "value2";
    console.log(func());
}

printFunc(printValue);  // value1

// foo();
// bar();

// var foo = function(){
//     console.log("foo and x = " + x);
// };

// function bar(){
//     console.log("bar and x = " +x);
// }


// var x = 1;