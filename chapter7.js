// let arr = [];
// arr.push(1,'strig',true);
// console.log(arr);
// for(let a of arr){
//     console.log(a);
// }

// let arr1 = new Array(1,'string',true);
// for(let a of arr1){
//     console.log(a);
// }

// let arr2 = Array(1,'string',true);
// for(let a of arr2){
//     console.log(a);
// }

// 희소배열

// let arr = Array();
// arr[99] = 'string';
// console.log(arr);   // empty * 99 , "string"
// console.log(typeof arr[0]);     // undefined
// console.log(typeof arr[99]);    // string

// 다차원 배열

// let arr = new Array(3); // 길이가 3인 배열 생성
// for (let a=0 ; a<3; a++){
//     arr[a]  = new Array(4);
//     for(let b=0; b<4; b++){
//         arr[a][b] = "["+a+","+b+"]";
//         console.log(arr[a][b]+" ");
//     }
// }   // [0,0], [0,1] ... [0,3], [1,0],[1,1], ... ,[1,3], [2.0], [2,1] , ... [2,3];


// 연관 배열

let arr = Array();
arr["월요일"]="월요일";
arr["참"] = true;
arr["일"] = 1;
console.log(arr["월요일"]); // 월요일
console.log(arr["참"]); // 참
console.log(arr["일"]); // 일
arr[arr.length] = 4;    
console.log(arr);   // 4, 월요일, 참, 일