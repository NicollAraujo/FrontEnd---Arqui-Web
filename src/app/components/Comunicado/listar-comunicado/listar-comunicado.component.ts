import { Component, OnInit, ViewChild } from '@angular/core';
import { Comunicado } from 'src/app/models/comunicado';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ComunicadoService } from 'src/app/services/comunicado.service';

@Component({
  selector: 'app-listar-comunicado',
  templateUrl: './listar-comunicado.component.html',
  styleUrls: ['./listar-comunicado.component.css']
})
export class ListarComunicadoComponent implements OnInit {
  dataSource: MatTableDataSource<Comunicado> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'codigo',
    'titulo',
    'descripcion',
    'fecha',
    'usuario',
    'areadetrabajo',
    'grupo',
    'accion01',
    'accion02',
  ];

  constructor(private cS: ComunicadoService) {}
  ngOnInit(): void {
    this.cS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.cS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  eliminar(id: number) {
    this.cS.delete(id).subscribe((data) => {
      this.cS.list().subscribe((data) => {
        this.cS.setList(data);
      });
    });
  }
  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }
}
