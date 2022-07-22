// 1. feladat
// Hozz létre egy tömböt, amiben 10-esével vannak a számok 0-tól 1000-ig
// [0, 10, 20, 30 ....]
var tomb1 = [];
for (var i = 0; i <= 1000; i = i + 10) {
  tomb1.push(i);
}
console.log("1. feladat");
console.log(tomb1);

// 2. feladat
// Írj függvényt, ami bemenetnek egy tömböt vár, és ellenőrzi, hogy a tömb
// összes eleme szám-e! true-val térjen vissza, ha igen, false-al egyébként.
// Pl.:
// mindegyikSzam([2,3,4]) => true
// mindegyikSzam([2,"alma",4]) => false
console.log("2. feladat");
function mindegyikSzam(arr) {
  for (var item of arr) {
    if (typeof item !== "number") {
      return false;
    }
  }
  return true;
}
console.log("mindegyikSzam([2,3,4])", mindegyikSzam([2, 3, 4]));
console.log('mindegyikSzam([2,"alma",4])', mindegyikSzam([2, "alma", 4]));

// 3. feladat
// Írj függvényt, ami bemenetnek két tömböt vár, és visszaad egy olyan tömböt,
// aminek minden eleme a másik két tömb megfelelő elemeinek összegének 2-szerese.
// Ha az egyik tömb hosszabb, mint a másik, akkor ott a hiányző értéket 0-nak vegye!
// Pl.:
// osszegDupla([3,5,5],[3,4]) => [12, 18, 10]

// 4. feladat
// Írj egy függvényt, ami bementként egy objektumot vár, és visszatér egy olyan
// számmal, ami az objektum 'max' kezdetű property-jeinek az értékeinek az
// összegével egyenlő!
// Pl.:
// sumMaxProperties({maxA:10, maxB: 20, minA:0, minB:3}) => 30

// 5. feladat
// A 21_gyakorlas.js fájl 3-dik feladatát csináld meg úgy, hogy nem használhatsz
// for ciklust vagy while ciklust (tehát csak array function-ök használatával)!
