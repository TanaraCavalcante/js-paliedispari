/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

//TODO RICUPERARE ELEMENTI DAL DOM
const wordField = document.querySelector('input');
const btnReverse = document.querySelector('button');
const result = document.querySelector('p');

//TODO ELABORAZIONE

//Elaborare la funzione
function getReverse(){
    let word = wordField.value;
    let wordReverse = '';
    let message = 'Diversa!';
 for (let i = word.length -1; i >=0 ; i--){
    wordReverse += word[i];
    //condizione
    if (word === wordReverse){
        message = 'Palidroma!'
    }
 }
 //stampa em console
 console.log(word + ' ' + wordReverse);
 console.log(message);  

//TODO OUTPUT
result.innerHTML = `<p>${word}  ${wordReverse}</p>
                    <b> ${message} </b>`
}

//Creare l'evento di reazione al 'click'
btnReverse.addEventListener('click', getReverse);
