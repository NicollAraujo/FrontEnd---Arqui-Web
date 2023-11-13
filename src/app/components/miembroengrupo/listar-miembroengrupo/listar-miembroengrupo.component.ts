import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MiembroEnGrupo } from 'src/app/models/miembroengrupo';
import { MiembroengrupoService } from 'src/app/services/miembroengrupo.service';

@Component({
  selector: 'app-listar-miembroengrupo',
  templateUrl: './listar-miembroengrupo.component.html',
  styleUrls: ['./listar-miembroengrupo.component.scss']
})
export class ListarMiembroengrupoComponent {
  miembroEnGrupo: MiembroEnGrupo = new MiembroEnGrupo();
  dataSource:MatTableDataSource<MiembroEnGrupo>=new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns:string[] = [
    'codigo',
    'miembro en area',
    'grupo de proyecto',
    'activo'
  ];
  constructor(private ms:MiembroengrupoService)
  {

  }
  ngOnInit(): void {
    this.ms.list().subscribe((data) => {
      data = data.sort((a, b) => a.idMiembroEnGrupo - b.idMiembroEnGrupo);
      const dataFiltrados = data.filter(item => item.active === true);
      this.dataSource = new MatTableDataSource(dataFiltrados);
      this.dataSource.paginator = this.paginator;
    });
    this.ms.getList().subscribe((data) => {
      data = data.sort((a, b) => a.idMiembroEnGrupo - b.idMiembroEnGrupo);
      const dataFiltrados = data.filter(item => item.active === true);
      this.dataSource = new MatTableDataSource(dataFiltrados);
      this.dataSource.paginator = this.paginator;
    });
  }

  eliminar(id:number){

    this.ms.listId(id).subscribe((miembroengrupo)=>
    {
      this.miembroEnGrupo = miembroengrupo
      this.miembroEnGrupo.active=false
      this.ms.update(this.miembroEnGrupo).subscribe(() => {
        this.ms.list().subscribe((data) => {
          this.ms.setList(data);
        });
      });
    })
    
  }
}
