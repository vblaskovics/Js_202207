var tomb1 = ["kék", "piros", "zöld", "sárga", "fehér"];

// forEach - függvény iteráció függvény paraméterrel
console.log("forEach ________")
tomb1.forEach(function (elem) {
  console.log(elem);
});

// forEach - index
console.log("forEach + index ________")
var tomb2;
tomb1.forEach(function (elem, index) {
  console.log(index, "-", elem);
});

// map - tömb megváltoztatása, függvény segítségével
console.log("map ________")
var tomb2 = [12, 1, 53, 100, 24];
var tomb3 = tomb2.map(function (elem) {
  return elem * 2;
});
console.log(tomb2);
console.log(tomb3);

// FELADAT : Írj egy fgv-t, ami bemenetül egy tömböt vár, és visszatér egy olyan
// tömbbel, ami a bemeneti tömb elemeit nagybetűs változatban tartalmazza!
// map használatával!
console.log(['a', 'b', 'c'].map(function (elem) {
  return elem.toUpperCase();
}));

// filter - szűrés tömbből
// azokat az elemeket fogja tartalmazni az új tömb, ahol true értéket adoot vissza
// a callback függvény
var tomb4 = tomb2.filter(function (n){
  return n < 30;
});

console.log("filter________");
console.log(tomb2);
console.log(tomb4);



console.log([1, 23, 34, 1, 34, 10].map(function (n){
  if (n === 1) {
    return 100;
  } else {
    return n;
  }
}));

// ES6-ban:
console.log([1, 23, 34, 1, 34, 10].map(n => n === 1 ? n * 100 : n));