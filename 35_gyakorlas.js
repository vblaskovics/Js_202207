// 27_gyakorlas.js / 3. feladat
// Ternary operatorral!

// Feladat:
// Írj függvényt, ami bemenetnek két tömböt vár, és visszaad egy olyan tömböt,
// aminek minden eleme a másik két tömb megfelelő elemeinek összegének 2-szerese.
// Ha az egyik tömb hosszabb, mint a másik, akkor ott a hiányző értéket 0-nak vegye!
// Pl.:
// osszegDupla([3,5,5],[3,4]) => [12, 18, 10]
function osszegDupla(arr1, arr2) {
  var arr3 = [];
  // a lépések száma a hosszabbik tömb hosszával legyen egyenlő
  var stepsCount = arr1.length > arr2.length ? arr1.length : arr2.length;
  for (var i = 0; i < stepsCount; i++) {
    // Ha valamelyik tömb elem, amit használni szeretnénk nem létezik,
    // akkor annak az értéke helyett 0-val számolunk.
    var arr1Number = arr1[i] === undefined ? 0 : arr1[i];
    var arr2Number = arr2[i] === undefined ? 0 : arr2[i];
    // Kiszámoljuk az eredményt
    var arr3Number = (arr1Number + arr2Number) * 2;
    // A kiszámolt eredményt lementjük az eredmény tömbbe
    arr3.push(arr3Number);
  }

  return arr3;
}
console.log("osszegDupla");
console.log(osszegDupla([3, 5, 5], [3, 4]));

// MÉG JOBBAN RÖVIDÍTVE:
function osszegDupla2(arr1, arr2) {
  var arr3 = [];
  var stepsCount = arr1.length > arr2.length ? arr1.length : arr2.length;
  for (var i = 0; i < stepsCount; i++) {
    arr3.push((arr1[i] ? arr1[i] : 0 + arr2[i] ? arr2[i] : 0) * 2);
  }
  return arr3;
}
console.log("osszegDupla2");
console.log(osszegDupla([3, 5, 5], [3, 4]));