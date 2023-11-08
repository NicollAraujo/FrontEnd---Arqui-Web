import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { addDays, format } from 'date-fns';
import { Tarea } from 'src/app/models/tarea';
import { TareaService } from 'src/app/services/tarea.service';
@Component({
  selector: 'app-creaedita-tarea',
  templateUrl: './creaedita-tarea.component.html',
  styleUrls: ['./creaedita-tarea.component.scss']
})
export class CreaeditaTareaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  tarea: Tarea = new Tarea();
  nombre: string = '';
  mensaje: string = '';
  descripcion: string = '';
  maxDate = addDays(new Date(), -1);
  creationDate = addDays(new Date(), -1);
  formattedMaxDate = format(this.maxDate, 'yyyy-MM-dd');
  id:number = 0;
  //listGrupoProyecto: GrupoProyecto[] = [];
  //listProyecto: Proyecto[] = [];
  edicion:boolean  =false;
  

  constructor(
    private tS:TareaService,
    //private gpS:GrupoProyectoService,
    //private pS:ProyectoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = this.formBuilder.group({
      idTarea: [''],
      
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaCreacion: ['', Validators.required],
      fechaLimite: ['', Validators.required],
<<<<<<< HEAD
      //grupoDeProyecto_id: ['', Validators.required],
      //Proyecto_id: ['', Validators.required]
=======
      grupoDeProyecto_id: ['', Validators.required],
      Proyecto_id: ['', Validators.required]
>>>>>>> 7337e6d3923104a52dd9222e7cead6ab39d9b8fb
    });
    /*this.gpS.list().subscribe((data) => {
      this.listGrupoProyecto = data;
    });
    this.pS.list().subscribe((data) => {
      this.listProyecto = data;
    });*/
  }

  aceptar(): void {
    if (this.form.valid) {
      this.tarea.idTarea= this.form.value.idTarea;
      this.tarea.descripcion = this.form.value.descripcion;
      this.tarea.nombre = this.form.value.nombre;
      this.tarea.fechaCreacion= this.form.value.fechaCreacion;
      this.tarea.fechaLimite = this.form.value.fechaLimite;
      //this.tarea.GrupoProyecto_id=GrupoProyectoSelect;
      //this.tarea.Proyecto_id=ProyectoSelect;
      this.tarea.active = true; 
      if (this.edicion) {
        this.tS.update(this.tarea).subscribe(() => {
          this.tS.list().subscribe((data) => {
            this.tS.setList(data);
          });
        });
      } else {
        this.tS.insert(this.tarea).subscribe((data) => {
          this.tS.list().subscribe((data) => {
            this.tS.setList(data);
          });
        });
      }
      this.router.navigate(['tareas']);
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
    }
  }

  init() {
    if (this.edicion) {
      this.tS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idTarea: new FormControl(data.idTarea),
          nombre: new FormControl(data.nombre),
          fechaCreacion: new FormControl(data.fechaCreacion),
          fechaLimite: new FormControl(data.fechaLimite),
          descripcion: new FormControl(data.descripcion),
          //GrupoProyecto_id: new FormControl(data.GrupoProyecto.idGrupoProyecto),
          //Proyecto_id: new FormControl(data.Proyecto.idProyecto),
        });
      });
    }
  }

  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }

}
