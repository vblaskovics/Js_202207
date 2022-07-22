// Global scope
var temp = "21";
console.log("temp a global scope-ban", this.temp);

// Function scope
function sayHello() {
  var helloString = "Hello User!";
  console.log("helloString a function scope-ban", helloString);
}
sayHello();

// Global scope használata a function scope-on belül
function sayHello2() {
  console.log("global scope használata a function scope-ban", "Hello", temp);
}
sayHello2();

// Function scope elérés, global scope-ból
// console.log("function scope elérése global scope-ból:", helloString); // => REFERENCE ERROR,
//                                                                          nincs ilyen változó

// SCOPES - var
var name1 = "Peter";
if (name1 === "Peter") {
  var name2 = "Bob";
}
console.log(name2); // Hibásnak kellene lennie, de a var működése miatt nem az!!!

/* A var a háttérben így működik:
var name1 = "Peter";
var name2;
if (name1 === "Peter"){
  name2 = "Bob";
}
*/

// Function scope-ok egymásba ágyazása
function kiiratas1() {
  console.log("kiiratas1");
  var kulsoValtozo = 10;
  function kiiratas2() {
    console.log("kiiratas2", kulsoValtozo);
  }
  kiiratas2();
}
kiiratas1();
// kiiratas2();  // => REFERENCE ERROR
// console.log(kulsoValtozo);  // => REFERENCE ERROR


// OBJEKTUMOK A GLOBÁLIS SCOPEBAN
// A futtató környezet globális scope-jában vannak definiálva objektumok, amiket
// az adott környezetben használni lehet!
// Pl:
//  - console -> Böngészőben, node.js-ben elérhető, Service Now-ban nem
//  - Class -> Service Now-ban elérhető, Böngészőben alapból nem

console.log(typeof Class);  // nodejs-ben: undefined, Service Now-ban object

