// 1.
// Írj függvényt, ami 3 számot vár bemenetnek és
// aminek a visszatérési értéke a 3 szám összege!
function sum3(n1, n2, n3) {
  return n1 + n2 + n3;
}
console.log("1. feladat", sum3(1, 2, 3));

// 2.
// Írj függvényt, ami 3 stringet vár bemenetnek és
// aminek a visszatérési értéke a 3 string vesszőkkel összefűzve!
function concat3(s1, s2, s3) {
  return s1 + "," + s2 + "," + s3;
}
console.log("2. feladat", concat3("alma", "körte", "narancs"));

// 3.
// Írj függvényt, ami bemenetként 3 user object-et vár, amiknek
// name és age property-jeik vannak, és visszatér az átlag életkorral!
function avarAge3(u1, u2, u3) {
  return (u1.age + u2.age + u3.age) / 3;
}
var user1 = { name: "Jack", age: 20 };
var user2 = { name: "Peter", age: 40 };
var user3 = { name: "Ben", age: 60 };
console.log("3. feladat", avarAge3(user1, user2, user3));

