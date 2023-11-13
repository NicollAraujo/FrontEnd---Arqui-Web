import { Tarea } from './tarea';
import { MiembroDeArea } from './miembrodearea';

export class TareaMiembroArea{
    idTareaMiembroArea:number=0;
    tarea: Tarea = new Tarea();
    miembroDeArea: MiembroDeArea=new MiembroDeArea();
    active:Boolean|undefined;
}