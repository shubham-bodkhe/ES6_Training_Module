let person = {
  firstName: "Shubham",
  lastName: "Bodkhe",
  age: 23,
};

const p = ({ fname, lname, age } = person);

console.log(p.firstName);
// -----------------------------------------------

let user = {
  name: "Shubham",
  phone: 9921033731,
  emails: {
    e1: "shubhamb@bsf.io",
    e2: "bodkheshubham9921@gmail.com",
  },
};

const vars = ({ email1, email2 } = user.emails);
