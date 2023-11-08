import { GP } from "./gp"
import { LoginUsuario } from "./login-usuario"
//import { AreaDeTrabajo } from "./areadetrabajo"

export class Comunicado{
    idComunicado:number=0
    titulo:String=""
    descripcion:String=""
    fechaCreacion:Date = new Date(Date.now())
    usuario:LoginUsuario = new LoginUsuario(username, password)
    areadetrabajo:AreaDeTrabajo=new AreaDeTrabajo()
    GrupoDeProyecto:GP = new GP()
}

//AGREGAR LAS IMPORTACIONES DE LAS CLASES QUE FALTAN