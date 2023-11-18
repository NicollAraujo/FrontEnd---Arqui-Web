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
import { Comunicado } from 'src/app/models/comunicado';
import { ComunicadoService } from 'src/app/services/comunicado.service';
//import { Usuario } from '';
//import { UsuarioService} from '';
//import { AreaDeTrabajo} from '';
//import { AreaDeTrabajoService} from '';
import * as moment from 'moment';

@Component({
  selector: 'app-creaedita-comunicado',
  templateUrl: './creaedita-comunicado.component.html',
  styleUrls: ['./creaedita-comunicado.component.css']
})
export class CreaeditaComunicadoComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  c: Comunicado = new Comunicado();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false;
  listagrupos: GP[] = [];
  //listausuarios: Usuario[] = [];
  //listatrabajos: AreaDeTrabajo[] = [];

  constructor(
    // private uS: UsuarioService,
    // private atS: AreaDeTrabajoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private gpS: GpService,
    private cS: ComunicadoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = this.formBuilder.group({
      idComunicado: [''],
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaCreacion: ['', [Validators.required]],
      usuario: ['', Validators.required],
      areadetrabajo: ['', Validators.required],
      GrupoDeProyecto: ['', [Validators.required]],
    });
    /*this.uS.list().subscribe((data) => {
      this.listausuarios = data;
    });*/
    /*this.atS.list().subscribe((data) => {
      this.listatrabajos = data;
    });*/
    this.gpS.list().subscribe((data) => {
      this.listagrupos = data;
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.c.idComunicado = this.form.value.idComunicado;
      this.c.titulo= this.form.value.titulo;
      this.c.descripcion=this.form.value.descripcion;
      this.c.fechaCreacion = this.form.value.fechaCreacion;
      //this.c.usuario.idusuario = this.form.value.usuario;
      //this.c.areadetrabajo.idat = this.from.value.areadetrabajo;
      this.c.GrupoDeProyecto.idGrupoDeProyecto = this.form.value.idGrupoDeProyecto;
    
      if (this.edicion) {
        this.cS.update(this.c).subscribe(() => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      } else {
        this.cS.insert(this.c).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      }
      this.router.navigate(['comunicados']);
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
      this.cS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          titulo: new FormControl(data.titulo),
          descripcion:new FormControl(data.descripcion),
          fechaCreacion:new FormControl(data.fechaCreacion),
          usuario:new FormControl(data.usuario),
          areadetrabajo:new FormControl(data.areadetrabajo),
          GrupoDeProyecto:new FormControl(data.GrupoDeProyecto),
        });
      });
    }
  }
}
