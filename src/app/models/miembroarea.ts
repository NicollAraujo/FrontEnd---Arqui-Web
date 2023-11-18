import { AreaDeTrabajo } from './areadetrabajo';
import { Usuario } from './usuario';

export class MiembroDeArea {
    idMiembroDeArea: number=0;
    usuario: Usuario = new Usuario();
    areaDeTrabajo: AreaDeTrabajo = new AreaDeTrabajo();
    active: boolean =false;
  }