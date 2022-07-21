console.log("1. for ciklus _____");
for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log("2. while ciklus _____");
// ha így használnád, akkor inkább for ciklus!!
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

console.log("3. while ciklus, random szám 0.2 és 04 között ____");
// nem elegáns megoldás, de működik...
var randomSzam = Math.random();
while (randomSzam < 0.2 || 0.4 < randomSzam) {
  console.log(randomSzam);
  randomSzam = Math.random();
}
console.log("Végső találat:", randomSzam);


console.log("4. while ciklus, random szám 0.2 és 04 között, break használatával ____");
// break
randomSzam = 0;
while (true) {
  randomSzam = Math.random();
  if (randomSzam > 0.2 && 0.4 > randomSzam) {
    break;
  }
}
console.log("Végső találat:", randomSzam);


console.log("5. do while ciklus, random szám 0.2 és 04 között ____");
// do while
randomSzam = 0;
do {
  randomSzam = Math.random();
} while(randomSzam < 0.2 || 0.4 < randomSzam);
console.log("Végső találat:", randomSzam);
