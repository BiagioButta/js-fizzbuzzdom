"use strict";

// Numeri da 0 a 100
for(let i = 0; i < 100; i++);

// let f = document.body.backgroundImage = "url('../img/League_Infobox_Fizz.jpg')";
// let b = document.body.backgroundImage = "url('../img/Senza titolo.png')";
// let fB = document.body.backgroundImage = "url('../img/XXEverywhere.jpg')";



// creo un div al quale assegno una classe row ed una costante 
const riga = document.createElement('div');
riga.className += 'row' ;

// considerata la successione da 0 a 100
for (let i = 1; i <= 100; i++){

    // se i numeri sono multipli di 5 e 3 
    if (i % 5 == 0 && i % 3 == 0){
        let box = document.createElement('div');
        box.className += 'col-1' ;
        //allora
        // box.append(fB)
        box.append('Div fizzbuzz');   
        
        riga.append(box);
       
        // console.log('FizzBuzz');

    // se sono multipli di 3    
    } else if (i % 3 == 0){
        let box = document.createElement('div');
        box.className += 'col-1' ;
        //allora
        // box.append(f)
        box.append('Div fizz');
        
        riga.append(box);
       
        // console.log('Fizz');

    // se sono multipli di 5 
    } else if (i % 5 == 0){
        let box = document.createElement('div');
        box.className += 'col-1' ;
        //allora
        // box.append(b)
        box.append('Div buzz');
        
        riga.append(box);
        
        // console.log('Buzz');
    // se non si veifica alcuna consizione citata
    } else {
        let box = document.createElement('div');
        box.className += 'col-1' ;
        //allora
        box.append('Div n.' + i )
        
        riga.append(box);
        
        // console.log('Div n.' + i )
    }
    
}

// creo una costante che collego al mio html tramite id
    const miodiv = document.getElementById('fizzbuzz');
    // APPENDO il div row creato all'inizio
    miodiv.append(riga);
