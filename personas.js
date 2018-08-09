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

    setPeso (peso) {
        this.peso = peso;
    }

    getPeso () { return this.peso }
}

let josias = new Personas("josias", 20, 1.75, 70);

josias.saludar();

josias.setPeso(60);
console.log(`josias pesa ${josias.getPeso()} kg`);