// JavaScript-ben, bárminek lehet venni a boolean megfelelőjét

console.log("true == true", true == true);  // true
console.log("true == false", true == false);  // false
// A true miatt, a == operátor az boolean összehasonítást akar végezni
// Az 1-es számnak a boolean megfelelője true
console.log("true == 1", true == 1);  // true
// Viszont! Ettől az 1-es szám, nem lesz boolean típusú változó:
console.log("true === 1", true === 1);  // false

// Erre mondjuk azt, hogy vannak olyan változók, amik true-ként viselkednek,
// másszóval truhty változók.
// Ugyanígy vannak olyan változók, amik false-ként viselkednek,
// másszóval falsy változók.

// Azt, hogy egy változó truthy vagy falsy, a legegyszerűbben úgy tudjuk megnézni,
// hogy kétszer egymás után negáljuk:

console.log("!!1",!!1);
console.log("!!0",!!0);
console.log("!!{}",!!{});
console.log("!![]",!![]);
console.log("!!undefined",!!undefined);
var variable1;
console.log("!!variable1",!!variable1);
var variable2 = 4;
console.log("!!variable2",!!variable2);
console.log("!!null",!!null);

// Bővebben: jsisweird.com (nem csak ilyen példák)

// Mikor használjuk ezt?

// Pl.: függvényeknél!

function kiirNegyzet (num) {
  console.log(num * num)
}
// kiirHossz();  // HIBA!! Cannot read properties of undefined

function kiirNegyzet2 (num) {
  if (num) {
    console.log(num * num)
  }
}
kiirHossz2();
// Ez nem a legjobb null ellenőrzés! Pl: mi van, ha 0-át adunk át
// Bőveben: javascript null check

