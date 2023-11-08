import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Comentario } from 'src/app/models/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-creaedita-comentario',
  templateUrl: './creaedita-comentario.component.html',
  styleUrls: ['./creaedita-comentario.component.scss']
})
export class CreaeditaComentarioComponent {
  form: FormGroup = new FormGroup({});
  Comentario: Comentario = new Comentario();
  comentario: string = '';
  id:number = 0;
  mensaje: string = '';
  //listTarea: Tarea[] = [];
  edicion:boolean  =false;
  

  constructor(
    private cS:ComentarioService,
    private tS:TareaService,
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
      idComentario: [''],
      comentario: ['', Validators.required],
      //Tarea_id: ['', Validators.required],
    });
    
  }

  aceptar(): void {
    if (this.form.valid) {
      this.Comentario.idComentario= this.form.value.idComentario;
      this.Comentario.comentario= this.form.value.comentario;
      //this.Comentario.Tarea_id=TareaSelect;
     
      this.Comentario.active = true; 
      if (this.edicion) {
        this.cS.update(this.Comentario).subscribe(() => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      } else {
        this.cS.insert(this.Comentario).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      }
      this.router.navigate(['comentarios']);
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
    }
  }

  init() {
    if (this.edicion) {
      this.cS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idComentario: new FormControl(data.idComentario),
          comentario: new FormControl(data.comentario),
          //Tarea_id: new FormControl(data.Tarea.idTarea),
          
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
