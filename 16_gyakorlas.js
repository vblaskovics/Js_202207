// 1. feladat
// Írj egy függvényt, ami bemenetként egy stringet kap, és kiírja, ha az üres.
// urese("") -> üres

console.log("1.FELADAT");
function urese(str) {
  if (str.length === 0) {
    console.log("üres");
  }
}
urese("");
urese("kutya");

// 2. feladat
// Írj egy függvényt, ami két string-et vár, és az elsőben megkeresi a másodikat.
// Ha nem található benne, akkor írja ki azt, hogy nem találjható.
// Ha megtalálja, akkor térjen vissza a második pozíciójával!
// keres("a b c", "b") -> 2
// keres("a b c", "d") -> Kiírja, hogy 'Nem található'
console.log("2.FELADAT");
function keres(str, sub) {
  var index = str.indexOf(sub);
  if (index == -1) {
    console.log("Nem található");
  } else {
    return index;
  }
}
console.log(keres("a b c", "b"));
keres("a b c", "d");

// 3. feladat
// Írj egy függvényt, ami egy magyar mobil számból kiszedi a hívószámot!
// hivoszam('+36307503040') -> 30
console.log("3.FELADAT");
function hivoszam(num) {
  return num.slice(3, 5);
}
console.log(hivoszam("+36307503040"));

// 4. feladat
// Írj egy függvényt, ami megnézi, hogy a bemeneti szövegben van-e @ karakter,
// és ha van, akkor csupa nagybetűvel kiírja, egyébként csupa kisbetűvel írja ki!
// kukacolo('asd@gmail.hu') -> ASD@GMAIL.HU
// kukacolo('AsztaL') -> asztal
console.log("4.FELADAT");
function kukacolo(str) {
  if (str.includes("@")) {
    console.log(str.toUpperCase());
  } else {
    console.log(str.toLowerCase());
  }
}
kukacolo("asd@gmail.hu");
kukacolo("AsztaL");
