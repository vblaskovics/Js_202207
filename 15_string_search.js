var str1 = "Ez egy viszonylag hosszú string lett! Még egy mondat.";

// indexOf - keresés
console.log("indexOf 'hosszú'", str1.indexOf("hosszú"));
console.log("indexOf - nem talált", str1.indexOf("repülőgép"));
console.log("indexOf 'egy'", str1.indexOf("egy"));
console.log("indexOf 'egy' a 10-es karaktertől", str1.indexOf("egy", 10));

// lastIndexOf - keresés a végéről indulva
console.log("lastIndexOf 'egy'", str1.lastIndexOf("egy"));
console.log("lastIndexOf 'egy' ", str1.lastIndexOf("egy", 10));

// includes - tartalmaz-e?
console.log("includes 'hosszú':", str1.includes("hosszú"));
console.log("includes 'repülőgép':", str1.includes("repülőgép"));

// startsWith - kezdet ellenőrzése
console.log("startsWith 'Ez':", str1.startsWith('Ez'));
console.log("startsWith 'Kocsi':", str1.startsWith('Kocsi'));

// endsWith - vég ellenőrzése
console.log("endsWith 'mondat.':", str1.endsWith('mondat.'));
console.log("endsWith 'Kocsi':", str1.endsWith('Kocsi'));