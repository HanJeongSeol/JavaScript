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

// 실행 컨텍스트
// // 외부함수
//     id = i, i = 0
//     // 내부함수
//         반환하는 id는 외부함수에서 참조, 따라서 0


