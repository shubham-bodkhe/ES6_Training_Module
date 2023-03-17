const arr = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9];
const arr3 = [...arr, ...arr2]; //Concat
const copy = [...arr, 53, 6]; //make copy of array
console.log(arr3);
console.log(copy);

n = [..."Shubham"]; //Spread it in array
console.log(n);
