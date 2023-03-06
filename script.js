let arr = [
  {
    name: "Yana",
    age: 23,
  },
  {
    name: "Ivan",
    age: 22,
  },
  {
    name: "Peter",
    age: 21,
  },
];

let result = arr.find((item, i, arr) => {
  return item.age === 22;
});

console.log(result);
