import { Component } from '@angular/core';
import{
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormControl,
}from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MiembroEnGrupo } from 'src/app/models/miembroengrupo';
import { MiembroengrupoService } from 'src/app/services/miembroengrupo.service';
@Component({
  selector: 'app-creadita-miembroengrupo',
  templateUrl: './creadita-miembroengrupo.component.html',
  styleUrls: ['./creadita-miembroengrupo.component.scss']
})
export class CreaditaMiembroengrupoComponent {
  form: FormGroup = new FormGroup({});
  miembroEnGrupo: MiembroEnGrupo = new MiembroEnGrupo();
  mensaje: string = '';
  id:number = 0;
  edicion:boolean  =false;
  constructor(
    private aS:MiembroengrupoService,
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
      idAreaDeTrabajo: [''],
      nombre: ['', Validators.required],
      descripcion:['', Validators.required],
    });
}
aceptar(): void {
  if (this.form.valid) {
    this.miembroEnGrupo.idMiembroEnGrupo = this.form.value.idMiembroEnGrupo;
    this.miembroEnGrupo.miembroDeArea = this.form.value.miembroDeArea;
    this.miembroEnGrupo.grupoDeProyecto = this.form.value.grupoDeProyecto;
    this.miembroEnGrupo.active = true; 
    if (this.edicion) {
      this.aS.update(this.miembroEnGrupo).subscribe(() => {
        this.aS.list().subscribe((data) => {
          this.aS.setList(data);
        });
      });
    } else {
      this.aS.insert(this.miembroEnGrupo).subscribe((data) => {
        this.aS.list().subscribe((data) => {
          this.aS.setList(data);
        });
      });
    }
    this.router.navigate(['miembroEnGrupo']);
  } else {
    this.mensaje = 'Por favor complete todos los campos obligatorios.';
  }
}
init() {
  if (this.edicion) {
    this.aS.listId(this.id).subscribe((data) => {
      this.form = new FormGroup({
        idMiembroEnGrupo: new FormControl(data.idMiembroEnGrupo),
        miembroDeArea: new FormControl(data.miembroDeArea),
        grupoDeProyecto: new FormControl(data.grupoDeProyecto),
        active: new FormControl(data.active)
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
