import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AreaDeTrabajo } from 'src/app/models/areadetrabajo';
import { AreadetrabajoService } from 'src/app/services/areadetrabajo.service';
import { MiembroDeArea } from 'src/app/models/miembroarea';
import { MiembroareaService } from 'src/app/services/miembroarea.service';
import { forkJoin, switchMap } from 'rxjs';
@Component({
  selector: 'app-creaedita-miembroarea',
  templateUrl: './creaedita-miembroarea.component.html',
  styleUrls: ['./creaedita-miembroarea.component.scss'],
})
export class CreaeditaMiembroareaComponent {
  form: FormGroup = new FormGroup({});
  miembroArea: MiembroDeArea = new MiembroDeArea();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  listUsuarios: Usuario[] = [];
  listAreas: AreaDeTrabajo[] = [];
  constructor(
    private maS: MiembroareaService,
    private aS: AreadetrabajoService,
    private uS: UsuarioService,
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
      idMiembroDeArea: [''],
      usuario: ['', Validators.required],
      areaDeTrabajo: ['', Validators.required],
    });
    this.uS.list().subscribe((data) => {
      this.listUsuarios = data;
    });
    this.aS.list().subscribe((data) => {
      this.listAreas = data;
    });
  }
  aceptar(): void {
    this.aS
      .listId(this.form.value.areaDeTrabajo)
      .subscribe((AreaTrabajoSelect) => {
        this.uS.listId(this.form.value.usuario).subscribe((UsuarioSelect) => {
          if (this.form.valid) {
            this.miembroArea.idMiembroDeArea = this.form.value.idProyecto;
            this.miembroArea.usuario = UsuarioSelect;
            this.miembroArea.areaDeTrabajo = AreaTrabajoSelect;
            this.miembroArea.active = true;
            if (this.edicion) {
              this.maS.update(this.miembroArea).subscribe(() => {
                this.maS.list().subscribe((data) => {
                  this.maS.setList(data);

                });
              });
            } else {
              this.maS.insert(this.miembroArea).subscribe((data) => {
                this.maS.list().subscribe((data) => {
                  this.maS.setList(data);
                });
              });
            }

            this.router.navigate(['miembroArea']);
          } else {
            this.mensaje = 'Por favor complete todos los campos obligatorios.';
          }
        });
      });
  }


  init() {
    if (this.edicion) {
      this.maS.listId(this.id).subscribe((data) => {
        console.log(data.usuario.nombre)
        this.form = new FormGroup({
          idMiembroDeArea: new FormControl(data.idMiembroDeArea),
          usuario: new FormControl(data.usuario.idUsuario),
          areaDeTrabajo: new FormControl(data.areaDeTrabajo.idAreaDeTrabajo),
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
