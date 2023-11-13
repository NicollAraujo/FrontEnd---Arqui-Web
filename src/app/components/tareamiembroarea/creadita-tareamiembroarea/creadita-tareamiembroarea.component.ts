import { Component } from '@angular/core';
import{
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormControl,
}from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TareaMiembroArea } from 'src/app/models/tareamiembroarea';
import { TareamiembroareaService } from 'src/app/services/tareamiembroarea.service';
@Component({
  selector: 'app-creadita-tareamiembroarea',
  templateUrl: './creadita-tareamiembroarea.component.html',
  styleUrls: ['./creadita-tareamiembroarea.component.scss']
})
export class CreaditaTareamiembroareaComponent {
  form: FormGroup = new FormGroup({});
  tareaMiembroArea: TareaMiembroArea = new TareaMiembroArea();
  mensaje: string = '';
  id:number = 0;
  edicion:boolean  =false;
  constructor(
    private aS:TareamiembroareaService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ){}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = this.formBuilder.group({
      idTareaMiembroArea: [''],
      miembroDeArea: ['', Validators.required],
      tarea:['', Validators.required],
      active:['', Validators.required],
    });
}
aceptar(): void {
  if (this.form.valid) {
    this.tareaMiembroArea.idTareaMiembroArea = this.form.value.idTareaMiembroArea;
    this.tareaMiembroArea.miembroDeArea = this.form.value.miembroDeArea;
    this.tareaMiembroArea.tarea = this.form.value.tarea;
    this.tareaMiembroArea.active = true; 
    if (this.edicion) {
      this.aS.update(this.tareaMiembroArea).subscribe(() => {
        this.aS.list().subscribe((data) => {
          this.aS.setList(data);
        });
      });
    } else {
      this.aS.insert(this.tareaMiembroArea).subscribe((data) => {
        this.aS.list().subscribe((data) => {
          this.aS.setList(data);
        });
      });
    }
    this.router.navigate(['tareaMiembroArea']);
  } else {
    this.mensaje = 'Por favor complete todos los campos obligatorios.';
  }
}
init() {
  if (this.edicion) {
    this.aS.listId(this.id).subscribe((data) => {
      this.form = new FormGroup({
        idTareaMiembroArea: new FormControl(data.idTareaMiembroArea),
        miembroDeArea: new FormControl(data.miembroDeArea),
        tarea: new FormControl(data.tarea),
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
