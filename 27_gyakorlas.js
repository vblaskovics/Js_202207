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
function osszegDupla(arr1, arr2) {
  var arr3 = [];
  // a lépések száma a hosszabbik tömb hosszával legyen egyenlő
  var stepsCount;
  if (arr1.length > arr2.length){
    stepsCount = arr1.length;
  } else {
    stepsCount = arr2.length;
  }

  for (var i = 0; i < stepsCount; i++) {
    var arr1Number = arr1[i];
    var arr2Number = arr2[i];
    // Ha valamelyik tömb elem, amit használni szeretnénk nem létezik,
    // akkor annak az értéke helyett 0-val számolunk.
    if (arr1Number === undefined) {
      arr1Number = 0;
    }
    if (arr2Number === undefined) {
      arr2Number = 0;
    }
    // Kiszámoljuk az eredményt
    var arr3Number = (arr1Number + arr2Number) * 2;
    // A kiszámolt eredményt lementjük az eredmény tömbbe
    arr3.push(arr3Number);
  }

  return arr3;
}
console.log("3. feladat");
console.log(osszegDupla([3, 5, 5], [3, 4]));

// 4. feladat
// Írj egy függvényt, ami bementként egy objektumot vár, és visszatér egy olyan
// számmal, ami az objektum 'max' kezdetű property-jeinek az értékeinek az
// összegével egyenlő!
// Pl.:
// sumMaxProperties({maxA:10, maxB: 20, minA:0, minB:3}) => 30
function sumMaxProperties(obj) {
  var sumMax = 0;
  for (var key in obj) {
    if (key.startsWith('max')) {
      sumMax += obj[key];
    }
  }
  return sumMax;
}
console.log("4. feladat");
console.log(sumMaxProperties({maxA:10, maxB: 20, minA:0, minB:3}));

// 5. feladat
// A 21_gyakorlas.js fájl 3-dik feladatát csináld meg úgy, hogy nem használhatsz
// for ciklust vagy while ciklust (tehát csak array function-ök használatával)!

// 21/3 Írj egy függvényt, ami visszatér egy olyan tömbbel, ami egy ilyen neveket
// tartalmazó tömbből kiindulva létrehoz egy olyan tömböt, amiben név alapján
// generált céges email címek vannak! Pl: [julie.white@telekom.hu, ...]

var originNevek = [
  "Julie White",
  "Carol Davis",
  "Julie Kelly",
  "Catherine Hall",
  "Samuel Lewis",
  "Christina Wood",
  "Noah Anderson",
  "Grace Marshall",
  "Sophia Morris",
  "Karen Lewis",
];

function generateEmails(names, domain) {
  return names.map(function (name) {
    return name.replace(' ', '.').toLowerCase() + '@' + domain;
  });
}
console.log("5. feladat");
console.log(generateEmails(originNevek, "gmail.com"));

// u.e. forEach-el:
function generateEmails2(names, domain) {
  var emails = [];
  names.forEach(function (name) {
    emails.push(name.replace(' ', '.').toLowerCase() + '@' + domain);
  });
  return emails;
}