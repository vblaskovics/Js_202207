// 1. Feladat
// Hozz létre egy 5 elemű tömböt (tetszőleges adattal)!
var tomb = ["a", "b", "c", "d", "e"];
console.log("1.feladat", tomb);

// 2. Feladat
// Adj hozzá 3 új elemet.
tomb.push("f", "g", "h");
console.log("2.feladat", tomb);

// 3. Feladat
// Módosítsd a 2-dik és a 4-dik elemét.
tomb[1] = 'b2'; 
tomb[3] = 'd2'; 
console.log("3.feladat", tomb);

// 4. Feladat
// Adj hozzá 1 elemet a push metódussal!
// Majd ezt távolítsd is el a pop metódussal!
tomb.push('i');
console.log("4.feladat");
console.log("tomb:", tomb);
var elem = tomb.pop();
console.log("elem:", elem);
console.log("tomb:", tomb);


// 5. feladat
// Töröld ki a 2-4-dik található elemeket!
console.log("5.feladat");
tomb.splice(1, 3);
console.log("tomb:", tomb);

// 6. Feladat
// Írasd ki a tömb hosszát!
console.log("6.feladat");
console.log("tomb hossz:", tomb.length);

// 7. Feladat
// Fűzz hozzá egy másik 2 elemű tömböt!
console.log("7.feladat");
console.log("tomb:", tomb.concat(['aa', 'bb']));

// 8. Feladat
// Töröld ki az első elemet (ne maradjon üres hely)!
console.log("8.feladat");
tomb.shift();
console.log("tomb:", tomb);
