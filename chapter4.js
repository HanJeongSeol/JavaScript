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

let symbol1 = Symbol('key');
let symbol2=  Symbol('key');
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
person[symbol1] = 'value1';
person[symbol2] = 'value2';
console.log(person);
console.log(person[symbol1] === 'value1');
console.log(person[symbol2] === 'value2');
console.log(symbol1 !== symbol2);
// console.log(person);
// console.log(person.favSong[0]);
// console.log(person.favFood[1].rice);
// console.log(person.age);
// person.age = 20;
// console.log(person.age);
// console.log(Math.pow(2, 2));