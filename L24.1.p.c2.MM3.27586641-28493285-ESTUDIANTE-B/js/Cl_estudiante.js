export default class Cl_estudiante{
    constructor(nombre, notas, materias){
        this.nombre = nombre;
        this.notas = notas;
        this.materias = materias;
    }

    promedionotas(){
       return (this.notas / this.materias)
    }
}

