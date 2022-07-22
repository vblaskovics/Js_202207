// THIS A GLOBAL SCOPE-ON BELÜL
console.log(this);
// ilyenkor a this a futtató környezettők függ!
// Pl. :
//  - böngészőben: Window
//  - node.js-ben: {}
//  - Service Now: [object Object]

// A this, ilyenkor a futtató környezet objektumára mutat rá, azt hívjuk global scope-nak
// Ennek általában van másik neve is - pl. böngészőben Window


// THIS OBJECT-EN BELÜL
// this az object-en belül az object-re vonatkozik!
var person = {
  firstName: 'Peter',
  lastName: 'Jackson',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;  // this nélkül hibaüzenet lenne!
  }
}
console.log("THIS OBJECT-EN BELÜL");
console.log(person.fullName());


