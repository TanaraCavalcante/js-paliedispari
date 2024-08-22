/*PALI O DISPARI
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.*/

//TODO RICUPERARE ELEMENTI DAL DOM
const result2 = document.getElementById('result2');

//TODO RACCOLTA DATI
const question = parseInt(prompt('Pari o Dispari?', 'pari'));

//TODO CALCOLO
//Generare i valori random per l'utente
  function getplayerNumber (min = 1, max = 5, isMaxIncluded){
    return Math.floor(Math.random() * (max - min + 1)) + min;  //fórmula passada em aula 22/08!
  }
  const playerNumber = getplayerNumber(1, 5, true);
  console.log(playerNumber);

//Generare i valori random per il pc
function getpcNumber (min = 1, max = 5, isMaxIncluded){
    return Math.floor(Math.random() * (max - min + 1)) + min;  //fórmula passada em aula 22/08!
  }
  const pcNumber = getpcNumber(1, 5, true);
  console.log(pcNumber);

//Fare la sommatoria dei valori

//Dire se il risultato è pari o dispari?

//TODO CHI HA VINTO?

//TODO OUTPUT


 