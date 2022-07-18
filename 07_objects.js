var obj1 = {};

console.log(obj1);
console.log(typeof obj1);

// Object definition
var user1 = {
  name: "Peter",
  age: 42,
  email: "peter@gmail.com",
};

// Attributes / Property
console.log(user1);
console.log(user1.name);
console.log(user1.age);
console.log(user1.email);

// Modify attribute
user1.name = "Jack";
console.log(user1);

// Remove attribute
delete user1.name;
console.log(user1);

user1.name = "Ben";
console.log(user1);

// Other way to reach properties
console.log(user1["name"]);
user1["age"] = 50;
console.log(user1["age"]);

// Nested objects

var student1 = {
  user: user1,
  school: "BME",
};

console.log("student1 neve:", student1.user.name);
