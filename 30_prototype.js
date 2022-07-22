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

