class Personas {
    constructor(nombre, edad, estatura, peso) {
        this.nombre = nombre;
        this.edad = edad;
        this.estatura = estatura;
        this.peso = peso;
    }

    saludar () {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad}`)
    }
}

let josias = new Personas("josias", 20, 1.75, 70);

josias.saludar();