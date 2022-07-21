// Függvény létrehozás (ismétlés)
function osszead(a, b) {
  return a + b;
}

// Anonymous függvény létrehozása, változó segítségével
var osszead2 = function (a, b) {
  return a + b;
};
console.log("typeof osszead2:", typeof osszead2);
console.log("osszead2(3, 4):", osszead2(3, 4));

// Függvények használata object-en belül
var user = {
  name: "Peter",
  age: 42,
  greeting: function () {
    console.log("Hi!");
  },
};
user.greeting();

// Függvény paraméter
console.log("Függvény paraméter__________");
function tombMuvelet(arr, func) {
  for (var elem of arr) {
    func(elem);
  }
}

var kiiratoFunc = function (str) {
  console.log(str);
};

var nagybetuFunc = function (str) {
  console.log(str.toUpperCase());
}

var tomb1 = ["a", "b", "c", "d"]
tombMuvelet(tomb1, kiiratoFunc);
tombMuvelet(tomb1, nagybetuFunc);
