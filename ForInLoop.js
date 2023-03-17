const person = {
  name: "shubham",
  sirname: "bodkhe",
  age: 23,
  location: "pune",
};

for (let key in person) {
  let value = person[key];
  console.log(key, value);
}
