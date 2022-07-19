// GYAKORLÓ CSAPAT

// 1. feladat
// Írj egy függvényt, ami elosztja a bemeneti paramétert 12-vel, és visszaadja az eredményt!
console.log("1. FELADAT");
function divide12(num) {
  return num / 12;
}
console.log("24 / 12 =", 24 / 12);
console.log("70 / 12 =", 60 / 12);

// 2. feladat
// Írj egy függvényt, ami ellenőrzi, hogy a bemeneti paramétere nagyobb-e, mint 0,
// ha igen, akkor kiírja, hogy 'Nagyobb, mint 0' ha nem, akkor azt írja ki, hogy
// nem nagyobb, mint 0
console.log("2. FELADAT");
function compare0(num) {
  if (num > 0) {
    console.log("Nagyobb, mint 0");
  } else {
    console.log("Nem nagyobb, mint 0");
  }
}
console.log(3);
compare0(3);
console.log(-1);
compare0(0);

// 3. feladat
// Írj egy függvényt, ami bemeneti paraméternek két számot vár.
// Ha a számok összege kisebb, mint 10, akkor adja vissza a számok szorzatát,
// egyébként pedig adja vissza a számok különbségét.
console.log("3. FELADAT");
function exercise3(num1, num2) {
  if (num1 + num2 < 10) {
    return num1 * num2;
  } else {
    return num1 - num2;
  }
}
console.log(exercise3(2, 4));
console.log(exercise3(4, 10));

// 4. feladat
// Írj egy függvényt, ami bemenetként 4 paramétert vár.
// Írd ki minden bemeneti paraméternek a típusát,
// majd térj vissza a bemeneti paraméterek összegének 100-szorosával.

// 5. feladat
// Írj egy függvényt, ami bementként két számot vár.
// Ha az első szám nagyobb, mint a második, akkor az első szám értékét növeld eggyel,
// a második szám értékét pedig csökkentsd eggyel, majd írasd ki mindkét számot!
// Ha az első szám kisebb, mint a második, akkor mindkét számot emeld négyzstre
// (szorozd be saját magával), majd írasd ki mindkét számot!
// Ha a két szám egyenlő, akkor ne csinálj semmit és ne is írj ki semmit!
