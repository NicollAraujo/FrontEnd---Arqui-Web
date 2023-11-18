import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GP } from 'src/app/models/gp';
import { GpService } from 'src/app/services/gp.service';
//import { Proyecto } from '';
//import { ProyectoService} from ''; SE COLOCA DE LAS OTRAS CLASES
import * as moment from 'moment';

@Component({
  selector: 'app-creaedita-gp',
  templateUrl: './creaedita-gp.component.html',
  styleUrls: ['./creaedita-gp.component.css']
})
export class CreaeditaGpComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  gp: GP = new GP();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false;
  //listaproyectos = Proyecto[] = [];

  constructor(
    // private pS: ProyectoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private gpS: GpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = this.formBuilder.group({
      idGrupoDeProyecto: [''],
      nombre: ['', Validators.required],
      fechaCreacion: ['', Validators.required],
      proyecto: ['', [Validators.required]],
    });
    /*this.pS.list().subscribe((data) => {
      this.listaproyectos = data;
    });*/
  }
  aceptar(): void {
    if (this.form.valid) {
      this.gp.idGrupoDeProyecto = this.form.value.idGrupoDeProyecto;
      this.gp.nombre = this.form.value.nombre;
      this.gp.fechaCreacion = this.form.value.fechaCreacion;
      //this.gp.proyecto.idproyecto = this.form.value.proyecto;
      if (this.edicion) {
        this.gpS.update(this.gp).subscribe(() => {
          this.gpS.list().subscribe((data) => {
            this.gpS.setList(data);
          });
        });
      } else {
        this.gpS.insert(this.gp).subscribe((data) => {
          this.gpS.list().subscribe((data) => {
            this.gpS.setList(data);
          });
        });
      }
      this.router.navigate(['grupos']);
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
    }
  }

  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }
  init() {
    if (this.edicion) {
      this.gpS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          nombre: new FormControl(data.nombre),
          fechaCreacion:new FormControl(data.fechaCreacion),
          proyecto: new FormControl(data.proyecto),
        });
      });
    }
  }
}
