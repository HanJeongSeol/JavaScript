// let x = 30;
// let y = 20;

// if(x==30){
//     console.log("x의 값은 30입니다.");
// }

// if(y==30){
//     console.log("y의 값은 30입니다.")
// }


// let x = 30;
// let y = 30;

// if(x > y){
//     console.log("x는 y보다 큽니다.");
// }
// else if(x < y){
//     console.log("x는 y보다 작습니다.");
// }
// else{
//     console.log("x와 y는 동일합니다.");     // x와 y는 동일합니다.
// }

// let x = 30;

// switch (x) {
//     case 10:
//         console.log("x의 값은 10입니다.");
//         break;
//     case 20:
//         console.log("x의 값은 20입니다.");
//         break;
//     case 30:
//         console.log("x의 값은 30입니다");
//         break;
//     default:
//         console.log("x는 숫자가 아닙니다.");
//         break;
// }

// let x = 1;
// while(x <= 10){
//     console.log(x);
//     x++;
// }

// let x = 1;
// do{
//     console.log(x);
//     x++;
// }while(x <1);
// console.log(x);
// x = 1;
// while(x<1){
//     console.log(x);
//     x++;
// }

// for(let x = 1; x <= 10; x++){
//     console.log(x);
// }

// for in
let person = {
    name: "hanjeong",
    gender: "male",
    age: 26,
    isCool: true,
    favSong: ["비", "너를만나", "Not Over Yet", "이별", "휴가"],
    favFood: [
        {
            name: "burger",
            rice: false
        },
        {
            name: "coffee",
            rice: false
        }
    ]
}

for(let prop in person){
    console.log(prop, person[prop]);
}


let arr = [3, 4, 5];

for (let i in arr) { 
    console.log(i);
}

for (var value of arr) { 
    console.log(i);
}