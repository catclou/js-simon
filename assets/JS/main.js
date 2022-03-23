// SIMON SAYS: Visualizzare in pagina 5 numeri casuali. Da lì parte un 
// timer di 30 secondi. Dopo 30 secondi l'utente deve inserire, uno
// alla volta, i numeri che ha visto precedentemente, tramite il
// prompt(). Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono stati individuati.

// 1) Generare 5 numeri random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// 2) inserire i 5 numeri casuali in un array
let numeriDiSimon = [];

for (i=1; i<=5; i++) {
    let numeriDaTemporizzare = getRandomIntInclusive(1, 100);
    // console.log(numeriDaTemporizzare);
    numeriDiSimon.push(numeriDaTemporizzare);
}

console.log(numeriDiSimon);

// 3) stampare i 5 numeri casuali temporizzandoli per 30 secondi 
// (prima li stampo, poi aggiungo una classe "none" per farli sparire)
let containerNumeri = document.getElementById("container-numeri");

for (n=0; n < numeriDiSimon.length; n++) {
	containerNumeri.innerHTML += `<span>${numeriDiSimon[n]}</span> `;
}

// 4) Dopo 30 secondi faccio sparire i numeri e invio 5 prompt

let arrayNumeriUtente = [];

setTimeout( function() {
	containerNumeri.classList.add("none");
    for (j=1; j<=5; j++) {
        let numeriUtente = prompt("Digita uno dei numeri che hai visto");
        // 5) pushare ogni volta il numero inserito dall'utente in un secondo array
        arrayNumeriUtente.push(numeriUtente);
    }
}, 10000 ); // ATTENZIONE! IL TIMER è ATTUALMENTE SETTATO A 10 SECONDI PER VELOCIZZARE LO SVILUPPO, RICORDARSI DI PASSARLO A 30 SECONDI QUANDO TUTTO FUNZIONERà!

console.log(arrayNumeriUtente);


// 6) confrontare i due array (meglio crearne un terzo contenente solo i risultati affini???)
// 7) stampare a schermo quanti e quali dei numeri l'utente ha ricordato correttamente.