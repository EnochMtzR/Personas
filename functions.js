function suma(a, b) {return a + b}

let resta = function (a, b) {
    try{
        return a - b
    } catch(e) {
        
    }
}

let multiplicar = (a, b) => a*b;

resta();


function hazAlgo(despues) {
    console.log("Esto se hace primero");
    return despues(2, 2);
}

console.log(hazAlgo(multiplicar));

console.log(typeof(resta));