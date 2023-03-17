const ages = [25, 15, 35, 63, 22];

const some = ages.some((age) => age >= 18);
console.log(some);

const every = ages.every((age) => age <= 63);
console.log(every);
