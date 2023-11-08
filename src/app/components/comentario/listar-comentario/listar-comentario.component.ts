import { Component,OnInit, ViewChild } from '@angular/core';
import { Comentario } from '../../../models/comentario';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-listar-comentario',
  templateUrl: './listar-comentario.component.html',
  styleUrls: ['./listar-comentario.component.scss']
})
export class ListarComentarioComponent {

  comentario: Comentario = new Comentario();
  dataSource:MatTableDataSource<Comentario>=new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns:string[] = [
    'codigo',
    'comentario',
    //'Tarea_id',
    'funciones'
  ];
  constructor(private cS:ComentarioService)
  {

  }
  ngOnInit(): void {
    this.cS.list().subscribe((data) => {
      data = data.sort((a, b) => a.idComentario - b.idComentario);
      const dataFiltrados = data.filter(item => item.active === true);
      this.dataSource = new MatTableDataSource(dataFiltrados);
      this.dataSource.paginator = this.paginator;
    });
    this.cS.getList().subscribe((data) => {
      data = data.sort((a, b) => a.idComentario - b.idComentario);
      const dataFiltrados = data.filter(item => item.active === true);
      this.dataSource = new MatTableDataSource(dataFiltrados);
      this.dataSource.paginator = this.paginator;
    });
  }

  eliminar(id:number){

    this.cS.listId(id).subscribe((comentario)=>
    {
      this.comentario = this.comentario
      this.comentario.active=false
      this.cS.update(this.comentario).subscribe(() => {
        this.cS.list().subscribe((data) => {
          this.cS.setList(data);
        });
      });
    })
    
  }

}
