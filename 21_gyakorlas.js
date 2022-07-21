// Hozz létre egy 'nevek' nevezetű tömböt, az alábbi nevekkel:
// "Julie White",
// "Carol Davis",
// "Julie Kelly",
// "Catherine Hall",
// "Samuel Lewis",
// "Christina Wood",
// "Noah Anderson",
// "Grace Marshall",
// "Sophia Morris",
// "Karen Lewis",
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

// 1. Írj egy függvényt, ami visszatér egy olyan tömbbel, ami egy ilyen neveket
// tartalmazó tömbből csak a vezetékneveket tartalmazza! Pl.:[White, Davis, ....]
function vezetekNevek(nevek) {
  var result = [];
  for (var i = 0; i < nevek.length; i++) {
    var nev = nevek[i];
    var vezeteknev = nev.slice(nev.indexOf(" ") + 1);
    result.push(vezeteknev);
  }
  return result;
}
console.log("1. feladat");
console.log(vezetekNevek(originNevek));

// 2. Írj egy függvényt, ami visszatér egy olyan tömbbel, ami egy ilyen neveket
// tartalmazó tömbből csak a keresztneveket tartalmazza!

// 3. Írj egy függvényt, ami visszatér egy olyan tömbbel, ami egy ilyen neveket
// tartalmazó tömbből kiindulva létrehoz egy olyan tömböt, amiben név alapján
// generált céges email címek vannak! Pl: [julie.white@telekom.hu, ...]
function generateEmails(names, domain) {
  var result = [];
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var lowerCaseName = name.toLowerCase();
    var emailBegin = lowerCaseName.replace(" ", ".");
    var email = emailBegin + "@" + domain;
    result.push(email);
  }
  return result;
}
console.log("3. feladat");
console.log(generateEmails(originNevek, "gmail.com"));


function generateEmailsShort(names, domain) {
  for (var i = 0, result = []; i < names.length; i++)
    result.push(names[i].toLowerCase().replace(" ", ".") + "@" + domain);
  return result;
}
console.log("3. feladat - HACKER SOLUTION");
console.log(generateEmailsShort(originNevek, "gmail.com"));

// 4.
// Írj függvényt, ami bemenetként egy számot vár, és írasd ki az összes prím
// számot, ami kisebb, mint a bemeneti szám!

// 5.
// Írj egy függvényt, ami bemenetként a nevek-hez hasonló tömböt vár,
// és írasd ki az összes lehetséges párosítást a nevek között! (sorrend nem számít)
// Pl:
// Julie White - Carol Davis
// Catherine Hall - Samuel Lewis
// ...stb
