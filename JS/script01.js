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
    //condizione
    let message = 'Le parole non sono Palidroma!';
    if (wordField === wordReverse){
        message = 'Le parole sono Palidroma!'
    }
 }

 console.log(wordField);
 console.log(wordReverse);
 console.log(message);
 return ;
}

//TODO OUTPUT
//Creare l'evento di reazione al 'click'
btnReverse.addEventListener('click', function(getReverse){ //! Perchè "getReverse" è spento?
    result.innerHTML = `<p>${wordField} ${wordReverse}</p>
                        <p>${message}</p>`;
})

