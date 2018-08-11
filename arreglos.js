let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('for()');
for(let i=0; i<numeros.length; i++){
    console.log(numeros[i]);
}

console.log('\nfor in');
for(i in numeros) {
    console.log(numeros[i]);
}

console.log('\nfor of');
for(numero of numeros) {
    console.log(numero);
}

let numeros2 = numeros.map((numero) => {
    return numero += 1;
});


console.log('\nfor each');
numeros2.forEach((numero) => {
    numero += 1;
    console.log(numero);
});

function mp(callback){
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let array2 = []

    for(let i=0; i<array.length; i++){
        array2.push(callback(array[i]));
    }
    return array2
}

console.log('\nfilter');

let impares = numeros.filter((numero) => numero %2 !== 0 );

console.log(impares);