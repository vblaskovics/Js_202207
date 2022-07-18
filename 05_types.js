// Number
var a = 0; 
console.log(typeof a);

// String
var t = "ez szöveg";
console.log(typeof t);

// Object
console.log(typeof console);

// Function
console.log(typeof console.log);

// Boolean
var b = true;
console.log(b);
console.log(typeof b);
b = false;
console.log(b);

// Undefined
var ujvaltozo;
console.log(typeof ujvaltozo);
console.log(ujvaltozo);

// typeof
var szoveg1 = "hello";
console.log(typeof szoveg1);
var szoveg1Type = typeof szoveg1;
console.log("typeof:", typeof szoveg1Type);

// A típusok dinamikusak
var szam1 = 10;
console.log("typeof szam1:", typeof szam1);
szam1 = "hello";
console.log("typeof szam1:", typeof szam1);
