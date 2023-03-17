const students = [
  {
    name: "Shubha",
    age: 23,
  },
  {
    name: "Yash",
    age: 24,
  },
  {
    name: "Pranav",
    age: 25,
  },
  {
    name: "Dnyan",
    age: 26,
  },
];

const abc = "Yash";
const obj = students.findIndex((name) => name.name === abc);

console.log(obj);
