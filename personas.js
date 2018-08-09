class Personas {
    constructor(nombre, edad, estatura, peso, especialidad) {
        this.nombre = nombre;
        this.edad = edad;
        this.estatura = estatura;
        this.peso = peso;
        this.especialidad = especialidad;
    }

    saludar () {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad}`)
    }

    setPeso (peso) {
        this.peso = peso;
    }

    describir () {
        console.log(`Hola soy ${this.nombre} y estoy en la especialidad de ${this.especialidad}`);
    }

    getPeso () { return this.peso }
}

let josias = new Personas("josias", 20, 1.75, 70, "software");

josias.saludar();

josias.setPeso(60);
console.log(`josias pesa ${josias.getPeso()} kg`);
josias.describir();