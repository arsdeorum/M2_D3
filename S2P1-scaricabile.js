//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 5;
let num2 = 10;

if (num1 > num2) {
  console.log("Il numero più grande è: " + num1);
} else if (num2 > num1) {
  console.log("Il numero più grande è: " + num2);
} else {
  console.log("I numeri sono uguali");
}


/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num = 12;

if (num < 5) {
  console.log("Tiny");
} else if (num < 10) {
  console.log("Small");
} else if (num < 15) {
  console.log("Medium");
} else if (num < 20) {
  console.log("Large");
} else {
  console.log("Huge");
}


//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let i = 0; i <= 10; i++) {
  if (i === 3 || i === 8) {
    continue;
  }
  console.log(i);
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
for (let i = 0; i <=15; i++) {
  if (i % 2 !== 0) {
    console.log(i, "numero dispari"); 
  } 
  else {
    console.log(i,"numero pari");
  }
}
//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n1 = 12;
let n2 = 4;
  if (n1 === 8 || n2 === 8 || n1 + n2 === 8 || n1 - n2 === 8) {
    console.log (true);
  } else {
    console.log (false);
  }

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio Extra 2");
let carrellototale = 30;
let costospedizione = carrellototale > 50 ? 0 : 10;
let grandtotal = carrellototale + costospedizione;
console.log("Il totale del carrello è: " + carrellototale);
console.log("Il costo della spedizione è: " + costospedizione);
console.log("Il totale da pagare è: " + grandtotal);

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio Extra 3");
let carrellototale3 = 50;
let sconto = carrellototale3 * 0.2;
let costospedizione3 = carrellototale3 > 50 ? 0 : 10;
let grandtotal3 = carrellototale3 + costospedizione3;
console.log("Il totale del carrello è: " + carrellototale3);
console.log("Il totale dello sconto è: " + sconto);
console.log("Il totale scontato è: " + (carrellototale3 - sconto));
console.log("Il costo della spedizione è: " + costospedizione3);
console.log("Il totale da pagare è: " + grandtotal3);

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio Extra 4");
let ismale = false;
let gender = ismale ? "male" : "female";
console.log(gender)

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
console.log("Esercizio Extra 5");
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
