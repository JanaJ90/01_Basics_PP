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
//console.log("ageJohn: " + ageJohn);
//console.log("ageMark: " + ageMark);
//console.log("isJohnOlder: " + isJohnOlder);
//console.log("isJohnEqual: " + isJohnEqual);
//console.log("------------------");

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

//if (isJohnOlder) {console.log("John ist älter."); // true
    

//else if (isJohnEqual)
 {
    //console.log("John ist gleich alt."); //alt true
    
}
//else 
{
    //console.log("John ist junger."); // false


}
/****** Fallunterscheidung / SWITCH|CASE 1 ******/

 //const firstName = "Jane";
 //let job;

//job = "driver";  // .. fährt TAXI! / UBER
//job = "diver"; // .. taucht im Rhein! 
//job = "artist"; // .. malt ein Bild!
// job = "pilot"; // .. macht etwas anderes! --> default
 //job = "teacher"; // .. unterrichtet!
 //job = "instructor"; // .. unterrichtet!

//switch (job)
 {
  //  case "driver":
    //    console.log(firstName + ".. fährt TAXI");
      //   break;
    //case "diver":
      //  console.log(firstName + ".. taucht in Reihn");
        //break;
        //case "artist":
          //  console.log(firstName + ".. malt ein Bild");
        //break;
        //case "teacher":
        //case "instructor":
          //  console.log(firstName + ".. unterichtet");
            //break;
        

    //default: // wichtig !!!
      //  console.log(firstName + ".. macht etwas anderes");
        //break;
}

/********  Fallunterscheidung / SWITCH|CASE 2 *******/

const cond = true;
const value = 10;

switch (cond) {
    case (value == 1):
        console.log("Value hat den Wert 1.");
        break;
    case (value == 2):
        console.log("Value hat den Wert 2.");
        break;
    default:
        console.log("Value hat einen anderen Wert.");
        break;
    }
