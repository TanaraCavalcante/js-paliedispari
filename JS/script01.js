/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

//TODO RICUPERARE ELEMENTI DAL DOM
const wordField = document.querySelector('input');
const btnReverse = document.querySelector('buttton');
const result = document.querySelector('p');

//TODO ELABORAZIONE
//resgatando il valore passado per l'utente
let word = wordField.value;

//Elaborare la funzione
let wordReverse = '';

function getReverse(){
 for (let i = word.length -1; i >=0 ; i--){
    wordReverse += word[i];
    //condizione
    let message = '';
    if (word === wordReverse){
        message = 'Le parole sono <string>Palidroma!</string>'
    }
 }
 //! Perchè non vedo il "consol.log" em console?
 console.log(word);
 console.log(wordReverse);
 console.log(message);  

}

//Creare l'evento di reazione al 'click'
btnReverse.addEventListener('click', getReverse);
