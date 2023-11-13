import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-miembroengrupo',
  templateUrl: './miembroengrupo.component.html',
  styleUrls: ['./miembroengrupo.component.scss']
})
export class MiembroengrupoComponent {
  constructor(public route:ActivatedRoute){

  }
}
