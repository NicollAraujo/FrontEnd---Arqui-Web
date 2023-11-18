import { GP } from "./gp"
//import { Usuario } from "./usuario"
//import { AreaDeTrabajo } from "./areadetrabajo"

export class Comunicado{
    idComunicado:number=0
    titulo:String=""
    descripcion:String=""
    fechaCreacion:Date=new Date(Date.now())
    //usuario:Usuario= new Usuario()
    //areadetrabajo:AreaDeTrabajo=new AreaDeTrabajo()
    GrupoDeProyecto:GP = new GP()
}

//AGREGAR LAS IMPORTACIONES DE LAS CLASES QUE FALTAN