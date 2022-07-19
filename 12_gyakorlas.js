// 1. feladat
// Írj egy függvényt, ami bemenetként egy számot vár, és kiírja, hogy a szám páros vagy
// páratlan!
console.log('1.FELADAT________')
function evenOrOdd(n) {
  if (n % 2 == 0) {
    console.log(n, 'páros');
  } else {
    console.log(n, 'páratlan');
  }
}
evenOrOdd(5);
evenOrOdd(2);

console.log('2.FELADAT________')
// 2. feladat
// Írj egy függvényt, ami egy számról megmondja, hogy egyjegyű, kétjegyű
// vagy háromjegyű! Ha egyik sem igaz, akkor írja ki, hogy hibás a bemenet!
function digitCount(n) {
  if (n % 1 != 0) {
    console.log(n, "Hibás a bemenet! Nem egész szám")
    return
  }
  if (-10 < n && n < 10) {
    console.log(n, "egyjegyű")
  } else if (-100 < n && n < 100) {
    console.log(n, "kétjegyű")
  } else if (-1000 < n && n < 1000){
    console.log(n, "háromjegyű")
  } else {
    console.log(n, "Hibás bemenet!")
  }
}
digitCount(4);
digitCount(12);
digitCount(644);
digitCount(-3);
digitCount(-13);
digitCount(-510);
digitCount(3.14);