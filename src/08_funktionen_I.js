
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

//test();

//function test()
//{
  //  console.log("Hallo, Marius!");
//}


/****Funktionen 02a *****/
// 2a. Parametrisirung + Datenübergabe von INNEN

// //Call
// ausgabeNamen();
// //Funktion
// function ausgabeNamen() {
//        // interne Variable
//     let firstName = "Jana";
//     console.log("Hallo, " + firstName + "!");
// }

// 2b. Parametrisirung + Datenübergabe von AUSSEN

// ausgabeNamen2("Jana");

// function ausgabeNamen2(firstName) {
//      console.log("Hallo, " + firstName + "!");
//     }

// 2c. Meherere Parameter / Argumente

// ausgabeNamenParams("Jana", "Janzen");

// function ausgabeNamenParams(firstName, familyName) {
//     console.log("Hallo, " + firstName + " " + familyName + "!");
// }

// const prompt = require('prompt-sync')({sigint: true});
// ausgabeNamenParams(prompt("Vorname?:"),prompt("Name?:"));

function ausgabeNamenParams(firstName, familyName) {
         console.log("Hallo, " + firstName + " " + familyName + "!");
}

//*****Funktion 3.  SRP single responsibility ptinciple*//
ausgabeNamenSRP("jana","janzen");

function ausgabeNamenSRP(firstName, familyName) {

    // 1. Funktionalität: string composit
    const GAP = " ";
    let outputStr = "Hallo, " + firstName + " " + familyName + "!"
   
    console.log(outputStr);
}





    
