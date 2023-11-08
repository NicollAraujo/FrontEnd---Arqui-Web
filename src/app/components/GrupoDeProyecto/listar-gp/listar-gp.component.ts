import { Component, OnInit, ViewChild } from '@angular/core';
import { GP } from 'src/app/models/gp';
import { MatTableDataSource } from '@angular/material/table';
import { GpService} from 'src/app/services/gp.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-listar-gp',
  templateUrl: './listar-gp.component.html',
  styleUrls: ['./listar-gp.component.css']
})
export class ListarGpComponent implements OnInit {
  dataSource: MatTableDataSource<GP> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'codigo',
    'grupo',
    'fecha',
    'proyecto',
    'accion01',
    'accion02',
  ];

  constructor(private gpS: GpService) {}
  ngOnInit(): void {
    this.gpS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.gpS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  eliminar(id: number) {
    this.gpS.delete(id).subscribe((data) => {
      this.gpS.list().subscribe((data) => {
        this.gpS.setList(data);
      });
    });
  }
  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }
}
