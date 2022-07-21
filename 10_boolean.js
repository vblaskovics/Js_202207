var b1 = true;
console.log("b1:", typeof b1);

var b2 = 2 < 3;
console.log("b2:", b2);
console.log("b2 type:", typeof b2);

console.log("Greater:", 10 > 5);
console.log("Lesser:", 10 < 5);
console.log("Equal 1:", 10 == 5);
console.log("Equal 2:", 10 == 10);
console.log("Not Equal 1:", 10 != 10);
console.log("Not Equal 2:", 10 != 3);
console.log("Greater or equal:", 10 >= 10);
console.log("Lesser or equal:", 10 <= 10);

console.log("Logical AND", true && true);
var szam1 = 10;
var feltetel1 = szam1 < 20;
var feltetel2 = szam1 > 5;
console.log("feltetel1 AND feltetel2:", feltetel1 && feltetel2);
console.log("Logical AND:", szam1 < 20 && szam1 > 5);
console.log("true && false:", true && false);
console.log("true && true && false:", true && true && false);

console.log("Logical OR");
console.log("true || true", true || true);
var szam2 = 20;
console.log("szam2 < -5 || szam2 > 10", szam2 < -5 || szam2 > 10);  // true
console.log("szam2 < -5 || szam2 == 2", szam2 < -5 || szam2 == 2);  // false

console.log("Logical NOT");
var b3 = true; 
console.log("!b3", !b3);
console.log("!false", !false);
