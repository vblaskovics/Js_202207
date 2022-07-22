var obj1 = {};

// Kezeletlen hiba:
// console.log(obj1.print());
// Kezeletlen hiba esetén megáll a program!
// Ezt minden féleképpen el akarjuk kerülni!!!

try {
  console.log(obj1.print());
} catch (error) {
  console.log("Hiba történt!!");
  console.log("Hiba üzenet:");
  console.log(error);
}
console.log("Megyünk tovább!");

// Custom error dobható a throw segítségével:

try {
  console.log("Throw előtt");
  throw "Dobtunk egy hibát"; // hasonlóan működik, mint a return
  console.log("Throw után");
} catch (error) {
  console.log("error:", error);
}
console.log("Megyünk tovább!");

// Példa throw használatára:

function szorzas(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw "num1 és num2 paramétereknek nem szám a típusa!";
  }
  return num1 * num2;
}

try {
  console.log(szorzas(24, "alma"));
} catch (error) {
  console.log("Hiba üzenet:", error);
}
