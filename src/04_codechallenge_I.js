
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

let zahl1 = prompt("Geben sie eine Zahl ein:");
let zahl2 = prompt("Geben sie zweite zahl ein:");
let summe = Number(zahl1) + Number(zahl2);
console.log("Summe ist:" + summe);

