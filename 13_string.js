var str1 = "Ez egy string";
console.log(str1);
console.log(typeof str1);

console.log("alma egyenlő körte?", "alma" == "körte");
console.log("alma egyenlő alma?", "alma" == "alma");

console.log("szöveg és szám összehasonlítása == jellel", 5 == "5"); // true
console.log("szöveg és szám összeadása", 5 + "5"); // 55
console.log("szöveg és szám összehasonlítása === jellel", 5 === "5"); // false
console.log("szám és szám összehasonlítása === jellel", 5 === 5); // true

console.log("string" + " összefűzése" + " a + jellel");

console.log('szimpla idézőjelet is használhatunk!');
console.log(typeof 'szimpla');

// Idézőjelek egymásba ágyazása
console.log('"Talpra magyar!" - Petőfi Sándor');
// Escape karakter használatával is megoldható:
console.log("\"Talpra magyar!\" - Petőfi Sándor");
// Speciális karakterek
console.log("Tabulátor \t is használható");
console.log("Sortörés\nis használható");
