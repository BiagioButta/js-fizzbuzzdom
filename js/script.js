"use strict";

// Numeri da 1 a 100
for(let i = 0; i < 100; i++);

let f = document.body.backgroundImage = "url('../img/League_Infobox_Fizz.jpg')";
let b = document.body.backgroundImage = "url('../img/Senza titolo.png')";
let fB = document.body.backgroundImage = "url('../img/XXEverywhere.jpg')";

const riga = document.createElement('div');
riga.className += 'row' ;

for (let i = 0; i <= 100; i++){

    if (i % 5 == 0 && i % 3 == 0){
        let box = document.createElement('div');
        box.className += 'col-1' ;
        box.append(fB)
        
        riga.append(box);
       
        console.log('FizzBuzz');

    } else if (i % 3 == 0){
        let box = document.createElement('div');
        box.className += 'col-1' ;
        box.append(f)
        
        riga.append(box);
       
        console.log('Fizz');

    } else if (i % 5 == 0){
        let box = document.createElement('div');
        box.className += 'col-1' ;
        box.append(b)
        
        riga.append(box);
        
        console.log('Buzz');

    } else {
        let box = document.createElement('div');
        box.className += 'col-1' ;
        box.append('Div n.' + i )
        
        riga.append(box);
        
        console.log('Div n.' + i )
    }
    
}

    const miodiv = document.getElementById('fizzbuzz');
    miodiv.append(riga);



