var str1 = "Próba szöveg";

// Hossz
console.log("length", str1.length);

// Szám hossza trükk
var szam1 = 1987;
var str2 = "" + szam1;
console.log("1987 számjegyeinek száma:", str2.length);

// slice - kivágás
console.log("slice 2-7:", str1.slice(2, 7));  // rész kivágása
console.log(str1);
console.log("slice 3:", str1.slice(3)); // vége kivágása
console.log("slice -2:", str1.slice(-2)); // vége kivágása, végéről indexelve

// substring -> majdnem ugyanaz, mint a slice
console.log("substring 2-7:", str1.substring(2, 7));  // rész kivágása, u.a, mint a slice(2,7)
console.log("substring -2:", str1.substring(-2));  // NEM ÉRTELMEZ - indexet!

// substr -> hasonló a slice-hoz, csak itt hosszt adunk meg!
// DEPRACTED lehetőleg, ne használjuk
console.log('substr 3,4', str1.substr(3, 4));

// replace
console.log("replace szöveg -> text:", str1.replace("szöveg", "text"));
// a replace csak az első találatot cseréli!
var gyumolcsok = "alma körte alma alma";
console.log("replace első:", gyumolcsok.replace("alma", "narancs"));


// toUpperCase - nagybetűsítés
console.log("toUpperCase:", str1.toUpperCase());
// toLowerCase - kisbetűsítés
console.log("toLowerCase:", str1.toLowerCase());

// concat - összefűzés
console.log("concat:", str1.concat("!!!"));

// Chainable
var str2 = str1.replace("Próba", "alma").slice(1,7).toUpperCase()
console.log('Chain művelet:', str2);