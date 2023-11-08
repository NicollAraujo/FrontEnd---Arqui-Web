import { Component,OnInit, ViewChild } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TareaService } from '../../../services/tarea.service';


@Component({
  selector: 'app-listar-tarea',
  templateUrl: './listar-tarea.component.html',
  styleUrls: ['./listar-tarea.component.scss']
})
export class ListarTareaComponent {

  tarea: Tarea = new Tarea();
  dataSource:MatTableDataSource<Tarea>=new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns:string[] = [
    'codigo',
    'nombre',
    'descripcion',
    'fechaCreacion',
    'fechaLimite',
    //'GrupoProyecto_id',
    //'royecto_id',
    'funciones'
  ];
  constructor(private tS:TareaService)
  {

  }
  ngOnInit(): void {
    this.tS.list().subscribe((data) => {
      data = data.sort((a, b) => a.idTarea - b.idTarea);
      const dataFiltrados = data.filter(item => item.active === true);
      this.dataSource = new MatTableDataSource(dataFiltrados);
      this.dataSource.paginator = this.paginator;
    });
    this.tS.getList().subscribe((data) => {
      data = data.sort((a, b) => a.idTarea - b.idTarea);
      const dataFiltrados = data.filter(item => item.active === true);
      this.dataSource = new MatTableDataSource(dataFiltrados);
      this.dataSource.paginator = this.paginator;
    });
  }

  eliminar(id:number){

    this.tS.listId(id).subscribe((tarea)=>
    {
      this.tarea = this.tarea
      this.tarea.active=false
      this.tS.update(this.tarea).subscribe(() => {
        this.tS.list().subscribe((data) => {
          this.tS.setList(data);
        });
      });
    })
    
  }

}
