import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MiembroDeArea } from 'src/app/models/miembroarea';
import { MiembroareaService } from 'src/app/services/miembroarea.service';
@Component({
  selector: 'app-listar-miembroarea',
  templateUrl: './listar-miembroarea.component.html',
  styleUrls: ['./listar-miembroarea.component.scss']
})
export class ListarMiembroareaComponent {
  miembroArea: MiembroDeArea = new MiembroDeArea();
  dataSource:MatTableDataSource<MiembroDeArea>=new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns:string[] = [
    'codigo',
    'usuario',
    'areaTrabajo',
    'funciones'
  ];
  constructor(private uMa:MiembroareaService)
  {
  }
ngOnInit(): void {
  this.uMa.list().subscribe((data) => {
    const dataFiltrados = data.filter(item => item.active === true);
    this.dataSource = new MatTableDataSource(dataFiltrados);
    this.dataSource.paginator = this.paginator;
  });
  this.uMa.getList().subscribe((data) => {
    const dataFiltrados = data.filter(item => item.active === true);
    this.dataSource = new MatTableDataSource(dataFiltrados);
    this.dataSource.paginator = this.paginator;
  } );
}
  eliminar(id:number){

    this.uMa.listId(id).subscribe((miembroArea)=>
    {
      this.miembroArea = miembroArea
      this.miembroArea.active=false
      this.uMa.update(this.miembroArea).subscribe(() => {
        this.uMa.list().subscribe((data) => {
          this.uMa.setList(data);
        });
      });
    })
    
  }


}