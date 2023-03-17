let a = 10;

const mul = (n) => n * n;

console.log(mul(a));

// arrow funtion is alwaysanonymous funtion

let race = 10;
let winners = ["Yash", "Shubham", "Pranav"];

let win = winners.map((winner, i) => ({
  name: winner,
  place: i + 1,
  race,
}));

console.table(win);
