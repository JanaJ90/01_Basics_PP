/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */


/*********   CODE CHALLENGE 02 **********/

// Eingabe des Namens
let Namen = prompt("Geben Sie einen Namen ein:");

// Eingabe des Alters
let alter = parseInt(prompt("Geben Sie ein Alter ein:"));

// Getränkeauswahl basierend auf dem Alter
let getraenk;

if (alter > 0 && alter < 6) {
    getraenk = "Milch";
} else if (alter >= 6 && alter <= 12) {
    getraenk = "Saft";
} else if (alter >= 13 && alter <= 17) {
    getraenk = "Cola";
} else if (alter >= 18) {
    getraenk = "Wein";
} else {
    getraenk = "unbekanntes Getränk";  // für den Fall, dass das Alter ungültig ist
}

// Ausgabe des Ergebnisses in der Konsole
console.log(`${Namen} trinkt ${getraenk}.`);
