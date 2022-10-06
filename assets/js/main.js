/*Il programma dovrà chiedere all'utente:
il numero di chilometri che vuole percorrere
e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

//chiedere numero chilometri da percorrere
//chiedere età
const kmRequest = prompt("Quanti chilometri devi percorrere?");
const userAge = prompt("Quanti anni hai?");
console.log(kmRequest);
console.log(userAge);

//calcolo prezzo biglietto in base ai chilometri
let userPrice = kmRequest * 0.21;
console.log("il prezzo in base ai chilometri è", userPrice);

//sconto 20% minorenni e sconto 40% over 65
if 