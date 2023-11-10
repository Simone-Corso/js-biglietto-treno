//# Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.


//Quanti km vuoi fare e quanti anni hai?

const eta = parseInt( prompt ('Quanti Anni Hai?'));
const km = parseInt( prompt ('Quanti Km Vuoi Fare? Un Km Corrisponde a 0,21€'));

const prezzoBiglietto = km * 0.21;
let prezzoFinale;

// inseriamo la domanda per verificare che nella console risponda in modo corretto.

console.log("Il prezzo del biglietto è: " + prezzoBiglietto);

if(eta < 18) {
    console.log("L'utente è minorenne");
    // Se è minorenne, devo fare uno sconto del 20%;
    const sconto =  prezzoBiglietto * 20 / 100
    console.log("Lo sconto del biglietto è: " + sconto );
    prezzoFinale = prezzoBiglietto - sconto 
    console.log("Il costo del biglietto è:" + prezzoFinale);

    //inseriamo altrimenti per over 65
} else if (eta > 65) {
    console.log("L'utente è anziano");
    // Se è anziano, devo fare uno sconto del 40%;
    const sconto =  prezzoBiglietto * 40 / 100
    console.log("Lo sconto del biglietto è: " + sconto );
    prezzoFinale = prezzoBiglietto - sconto 
    console.log("Il costo del biglietto è:" + prezzoFinale);
    //inseriamo altrimenti per qualsiasi età
} else {
    prezzoFinale = prezzoBiglietto; 
    console.log("Qualsiasi altrà età");
    console.log("Il costo del biglietto è:" + prezzoFinale);
}

// Infine il passaggio per far si che si presenti nell'html il prezzo finale.
document.getElementById("prezzo").innerHTML="Il prezzo finale è " + prezzoFinale;

