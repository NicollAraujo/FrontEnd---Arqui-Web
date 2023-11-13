import { GrupoDeProyecto } from './grupodeproyecto';
import { MiembroDeArea } from './miembrodearea';

export class MiembroEnGrupo{
    idMiembroEnGrupo:number=0;
    grupoDeProyecto: GrupoDeProyecto = new GrupoDeProyecto();
    miembroDeArea: MiembroDeArea=new MiembroDeArea();
    active:Boolean|undefined;
}