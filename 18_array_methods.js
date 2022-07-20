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
