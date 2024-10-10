import Cl_estudiante from "./Cl_estudiante.js";

export default class Cl_deportista extends Cl_estudiante{
    constructor(nombre, notas, materias, edad, deporte){
        super(nombre, notas, materias);
        this.edad = edad;
        this.deporte = deporte;
    }

    equipoBeisbol(){
        if (this.notas > 14 && this.edad == 21)
            return "es admitido en el equipo de Beisbol"
    }

    equipoFutbol(){
        if (this.notas >= 12 && this.edad == 19)
            return "es admitido al equipo de futbol"
    }
}