import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TareaMiembroArea } from 'src/app/models/tareamiembroarea';
import { TareamiembroareaService } from 'src/app/services/tareamiembroarea.service';

@Component({
  selector: 'app-listar-tareamiembroarea',
  templateUrl: './listar-tareamiembroarea.component.html',
  styleUrls: ['./listar-tareamiembroarea.component.scss']
})
export class ListarTareamiembroareaComponent {
  tareaMiembroArea: TareaMiembroArea = new TareaMiembroArea();
  dataSource:MatTableDataSource<TareaMiembroArea>=new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns:string[] = [
    'codigo',
    'miembro en area',
    'tarea',
    'activo'
  ];
  constructor(private ts:TareamiembroareaService)
  {

  }
  ngOnInit(): void {
    this.ts.list().subscribe((data) => {
      data = data.sort((a, b) => a.idTareaMiembroArea - b.idTareaMiembroArea);
      const dataFiltrados = data.filter(item => item.active === true);
      this.dataSource = new MatTableDataSource(dataFiltrados);
      this.dataSource.paginator = this.paginator;
    });
    this.ts.getList().subscribe((data) => {
      data = data.sort((a, b) => a.idTareaMiembroArea - b.idTareaMiembroArea);
      const dataFiltrados = data.filter(item => item.active === true);
      this.dataSource = new MatTableDataSource(dataFiltrados);
      this.dataSource.paginator = this.paginator;
    });
  }

  eliminar(id:number){

    this.ts.listId(id).subscribe((tareamiembroarea)=>
    {
      this.tareaMiembroArea = tareamiembroarea
      this.tareaMiembroArea.active=false
      this.ts.update(this.tareaMiembroArea).subscribe(() => {
        this.ts.list().subscribe((data) => {
          this.ts.setList(data);
        });
      });
    })
    
  }
}


