//import { GrupoProyecto } from './grupoproyecto';
//import { Proyecto } from './proyecto';

export class Tarea {
    idTarea:number = 0
    nombre:string = ""
    descripcion:string=""
    fechaCreacion: Date = new Date();
    fechaLimite: Date = new Date();
    //grupoDeProyecto_id: GrupoProyecto = new GrupoProyecto();
    //Proyecto_id: Proyecto = new Proyecto();
    active:boolean | undefined
}