// Írjuk ki a számokat 1-99-ig!
for (var i = 1; i <= 99; i++) {
  console.log(i);
}

// Írasd ki az 100-nél kisebb 4-el osztható számokat!
for (var i = 1; i <= 100; i++) {
  if (i % 4 == 0) {
    console.log(i);
  }
}

for (var i = 4; i <= 100; i = i + 4) {
  console.log(i);
}

// VÉGTELEN CIKLUS HIBA
// for (var i = 4; i <= 1000; i = i + 4) {
//   console.log(i);
//   i = -5;
// }

// For ciklus tömbökkel együtt!
// Írjuk ki egy tömb összes elemét!
var tomb1 = ['alma', 'körte', 'dinnye', 'szilve']; 
for (var i = 0; i < tomb1.length; i++) {
  console.log(tomb1[i]);
}

var tomb2 = ['kék', 'piros', 'fehér', 'barma'];

// FELADAT
// Írj egy for ciklust, amiben felváltva írod ki a két tömb elemeit!
for (var i = 0; i < tomb1.length; i++) {
  console.log(tomb1[i]);
  console.log(tomb2[i]);
}