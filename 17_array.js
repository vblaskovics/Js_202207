var users = ["Alíz", "Bob", "Dávid"];
console.log(users);
console.log(typeof users);
console.log("users[0]:", users[0]);
console.log("users[1]:", users[1]);
console.log("users[2]:", users[2]);
console.log("users[3]:", users[3]); // --> undefined

// Tömb elemek elérése
var cars = [];
cars[0] = "BMW";
cars[1] = "Mercedes";
cars[2] = "Nissan";
cars[1] = "Toyota";
console.log("cars:", cars);

// A tömb elemek típusa dinamikus
var arr1 = [12, "alma", { name: "Peter", age: 30 }];
console.log("typeof arr1[0]", typeof arr1[0]);
console.log("typeof arr1[1]", typeof arr1[1]);
console.log("typeof arr1[2]", typeof arr1[2]);

// Tömb elem megadása változóval
var num1 = 12;
var nums = [3, 8, num1];
console.log("nums:", nums);
num1 += 3;
console.log("nums:", nums);

// Array object
var arr2 = new Array(); // ==> var arr2 = [];
arr2[0] = "arr2 első eleme";
console.log("arr2", arr2);
