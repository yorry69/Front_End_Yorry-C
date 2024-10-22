// 1.rest parameter

//tanpa rest parameter
const func1 = (param1, param2, param3, param4, param5) =>
    console.log(param1, param2, param3, param4, param5);

func1("A","B","C","D","E");

//dengan rest parameter
const func2 = (...params) => {
    console.log(params);
};

func2("A","B","C","D","E","F","G");

//2. spread operator
let numbers = [1,2,3,4,5];
console.log(numbers);
console.log(..numbers);

//array
//1. Duplikasi array
let numbers2 = [...numbers];
numbers.push(6);
console.log(numbers2);

//2. Menggabungkan array
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

let numbers3 = arr1,concat(arr2, arr3); //ES5
let numbers4 = [...arr1, ...arr2,...arr3]; //ES6

//object

