const arr = ["Shubham", 1, 2, 2, 5];

function sum(name, ...a) {
  console.log(name);
  let sum = 0;
  for (let n of a) {
    sum += n;
  }
  console.log(sum);
}

sum("Shubham", 1, 2, 3, 5);
