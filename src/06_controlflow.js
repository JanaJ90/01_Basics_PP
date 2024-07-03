// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 25;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// if(true) // Variante 1
{
    //console.log("John ist älter.");
}


// if(false) // Variante 2
{
   // console.log("John ist älter.");
}

 // if(isJohnOlder)// Variante 3
 {
    //console.log("John ist älter.");
 }

//if (ageJohn > ageMark) //  Variante 4
{
    //console.log("John ist älter.");
}
 
//else 
{
    //console.log("John ist junger.");
}

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");


/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter, jünger, gleich alt)

if (isJohnOlder) {console.log("John ist älter."); // true
    
} 
else if (isJohnEqual)
 {
    console.log("John ist gleich alt."); //alt true
    
}
else 
{
    console.log("John ist junger."); // false
}
