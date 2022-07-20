var gyumolcsok = ["alma", "körte", "narancs", "ananász"];

// length - Tömb hosssza
console.log("gyumolcsok tömb hossza:", gyumolcsok.length);

// Elem hozzáadása tömbhöz
console.log("gyumolcsok utolsó eleme:", gyumolcsok[gyumolcsok.length - 1]);
gyumolcsok[gyumolcsok.length] = "szőlő";
console.log("gyumolcsok:", gyumolcsok);

// push - Elem hozzáadása tömbhöz push függvénnyel
gyumolcsok.push("dinnye");
console.log("gyumolcsok:", gyumolcsok);

// pop - Utolsó elem kivétele a tömbből
var utolsoGyumolcs = gyumolcsok.pop();
console.log("utolsoGyumolcs:", utolsoGyumolcs);
console.log("gyumolcsok:", gyumolcsok);

// shift - első elem eltávolítása + többi elem eltolása
var elso = gyumolcsok.shift();
console.log("shift-elt elem:", elso);
console.log("gyumolcsok:", gyumolcsok);

// unshift - első elem hozzáadása a tömbhöz
gyumolcsok.unshift("alma");
console.log("gyumolcsok:", gyumolcsok);

// delete - elem kiürítése -> óvatosan!
delete gyumolcsok[2];
console.log("gyumolcsok:", gyumolcsok);
console.log("delete-elt elem:", gyumolcsok[2]);

// concat - tömbök összefűzése
var tomb1 = ["kék", "piros"];
var tomb2 = ["zöld", "sárga", "lila"];
var tomb3 = ["fehér", "szürke"];
var tomb4 = tomb1.concat(tomb2, tomb3);
console.log("tomb4:", tomb4);

// splice  => tömb manipuláció, HELYBEN TÖRTÉNIK!!!
var tomb5 = ["kék", "piros", "zöld", "sárga", "fehér"];
console.log("tomb5:", tomb5);
// 1 paraméter:
tomb5.splice(3);
console.log("tomb5.splice(3):", tomb5);
// 2 paraméter:
tomb5 = ["kék", "piros", "zöld", "sárga", "fehér"];
tomb5.splice(1, 3);
console.log("tomb5.splice(1, 3):", tomb5);
// Sok paraméter
tomb5 = ["kék", "piros", "zöld", "sárga", "fehér"];
tomb5.splice(2, 0, "türkiz", "keki");
console.log("tomb5.splice(2, 0, 'türkiz', 'keki'):", tomb5);

tomb5 = ["kék", "piros", "zöld", "sárga", "fehér"];
tomb5.splice(1, 3, "türkiz", "keki");
console.log("tomb5.splice(1, 3, 'türkiz', 'keki'):", tomb5);

// slice - kivágás a tömbből => új tömb!
tomb5 = ["kék", "piros", "zöld", "sárga", "fehér"];
console.log("tomb5:", tomb5);
var tomb6 = tomb5.slice(3);
console.log("tomb5.slice(3):", tomb6);

// Haladó - Chaining:
function osszefuzEsKivag(tomb1, tomb2, index) {
  return tomb1.concat(tomb2).slice(index);
}
var hTomb1 = ["a", "b", "c"];
var hTomb2 = ["d", "e", "f"];
console.log("hTomb1:", hTomb1);
console.log("hTomb2:", hTomb2);
console.log("osszefuEsKivag", osszefuzEsKivag(hTomb1, hTomb2, 2));
