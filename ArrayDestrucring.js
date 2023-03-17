// const arr = [1, 2, 3, 4];

// const [a, b, c, d] = arr;

// console.log(a, b, c, d);
// ------------------------------------

const player = ["Dhoni", "Virat", "Bhuneshwar", "Pandya", "Rohit"];

const [captain, vice_captain, ...players] = player;

console.log(captain, vice_captain, players);
// --------------------------------------------

let a = 10;
let b = 20;
[a, b] = [b, a];

console.log(a, b);
