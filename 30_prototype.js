// A prototype segítségével lehet megvalósítani a JavaScript-ben öröklődést

// Bővebben az öröklődésről: OOP, object-oriented programming
// Bővebben: ES5 prototype chain

// Hasonló objektumok, hasonló függvényekkel és attribútumokkal:
var person1 = {
  firstName: 'Peter',
  lastName: 'Jackson',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;  // this nélkül hibaüzenet lenne!
  }
}

var person2 = {
  firstName: 'John',
  lastName: 'Wick',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;  // this nélkül hibaüzenet lenne!
  }
}

var tomb = [person1, person2]
tomb.forEach(function(p) {
  console.log(p.firstName, p.fullName());
});

// Objektum - orientált programozás alapja: általánosítás, típus definiálás, másszóval osztályok
// definiálása, és azok alapján új objektumok létrehozása


// ES5-ben 'osztály' vagy 'class' definiálása nem lehetséges, de szimulálni tudjuk a működését
// függvények és prototype-ok segítségével!

function Person(firstName, lastName) {
  this.firstName = firstName;   // itt a this a függvény scope-ja!
  this.lastName = lastName;
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
}

var p1 = new Person('Boba', 'Fet');
console.log(p1.lastName);
console.log(p1.fullName());

// p1 -> Person.prototype -> Object.prototype
// new Person() -> clone Person.prototype
// p1 object prototype hivatkozása be lessz állítva a Person.prototype-ra

// Függvény hívás:
// 1. megpróbáljuk meghívni a p1.fullName() -> ilyen nincs
// 2. a javascript megkeresi a p1 prototype hivatkozását, és megnézni,
// hogy melyik prototype object-re mutat.
// 3. Azon az objecten hívja meg, a függvényt (ha megtalálja)
//  Pl. : Person.prototype.fullName() -> ezt már meg fogja tudni hívni

// p1.fullName helyett a Person.prototype.fullName() fog meghívódni
// p2.fullName helyett a Person.prototype.fullName() fog meghívódni
// p3.fullName helyett a Person.prototype.fullName() fog meghívódni
// p4.fullName helyett a Person.prototype.fullName() fog meghívódni
// ....
// Így tehát a példányok nem tartalmazzák a függvényeket

// p1.firstName az létezik a p1-en belül, mert nem függvény

// A prototype objektum minden más object-hez hasonlóan, menet
// közben módosítható
console.log(Person.prototype);
Person.prototype.print = function(){
  console.log(this.fullName());
}
p1.print();

var p2 = new Person('John', 'Wick');
p2.print();


