//////////splice delete item //////
//////////splice get item deleted////////
//////////slice copy elem from position////
//////////indexOf find  item from position return -1///////
//////////includes find  item from position return boolean///////
//////////method find  item in obj contains field ///////
//////////filter get elem by condition /////////////

// let num = [1, 2, 3, [2, 3], [4, 6]];

// let res = num.flat(1).reduce((acc, item) => acc + item);

// let arr = [
//   {
//     name: "Yana",
//     age: 23,
//   },
//   {
//     name: "Ivan",
//     age: 22,
//   },
//   {
//     name: "Peter",
//     age: 21,
//   },
// ];

let arr = ["Yana", "Anna", "Mihalka"];

arr.splice(2, 1, "ivan");

console.log(arr);

// for( let i = 0; i< arr.length;i++){}
