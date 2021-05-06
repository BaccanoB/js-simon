// Descrizione:
// Un alert() espone 5 numeri generati casualmente.

function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// .includes()
// array1.includes(array2)

function comparisonArray (array1, array2){
    for (var i = 0; i < array2.length; i++){
        if (array1[i] == array2[i]){
            return true;
        }
    }
    return false;
}

var randomNumbers = [];

for (var i = 0; i < 5; i++){
    var casualNumbers = randomNumber(1,100);
    randomNumbers.push(casualNumbers);
}
console.log(randomNumbers);

alert("Memorizza questi numeri!:\n" + randomNumbers);

// Da li parte un timer di 30 secondi.


var seconds = 30;

var countdown = setInterval( function () {
    console.log(seconds);

     if (seconds == 0){
        clearInterval(countdown); 

        for (var i = 0; i < 5; i++){
        var userChoice = parseInt(prompt("Inserisci un numero!"));
        userNumbers.push(userChoice);
        }
        console.log(userNumbers);

     }else {
         seconds --;
     }

 }, 1000);

var userNumbers = [];




// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt()


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

