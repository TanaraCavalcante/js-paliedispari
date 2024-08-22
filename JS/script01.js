/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

//TODO RICUPERARE ELEMENTI DAL DOM
const wordField = document.querySelector('input');
const btnReverse = document.querySelector('buttton');
const result = document.querySelector('p');

//TODO ELABORAZIONE
//Elaborare la funzione
let wordReverse = '';
function getReverse(){
 for (let i = wordField.length -1; i >=0 ; i--){
    wordReverse += wordField[i];
 }
 return wordReverse;
}
console.log(wordReverse);

//Creare l'evento di reazione al 'click'


//TODO OUTPUT