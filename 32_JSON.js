// JSON = JavaScript Object Notation
// A JSON egy adatstruktúa formátum!
// Olyan, mint pl az XML
// Elsődleges szerepe a http alapú webes kommunikációban van

// A JSON alapvetően string típusú:
var exampleJSON =
  '{"name":"Peter","age":20,"pets":[{"name":"Buksi","color":"black"},{"name":"Cirmi","color":"white"}]}';
console.log("exampleJSON:", exampleJSON);

// JavaScript-en belül elérhető: JSON segédobjektum, ami JSON
// kezeléshez használható függvényeket tartalmaz
console.log("JSON:", JSON);

// Bármelyik JSON-t át lehet alakítani JS objektummá, a JSON.parse() függvénnyel:
var exampleJS = JSON.parse(exampleJSON);
console.log("JSON.parse(exampleJSON):", exampleJS);

console.log("exampleJSON.name", exampleJSON.name);
console.log("exampleJS.name", exampleJS.name);

// A konverzió a másik irányba is lehetséges, Object -> String:
var obj1 = {
  x: 20,
  y: 10,
  color: "red",
};
console.log(typeof JSON.stringify(obj1));
console.log(JSON.stringify(obj1));
