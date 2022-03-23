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
// 4) far comparire un prompt per 5 volte
// 5) pushare ogni volta il numero inserito dall'utente in un secondo array
// 6) confrontare i due array (meglio crearne un terzo contenente solo i risultati affini?)
// 7) stampare a schermo quanti e quali dei numeri l'utente ha ricordato correttamente.