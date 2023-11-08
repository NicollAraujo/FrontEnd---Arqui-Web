import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-miembroarea',
  templateUrl: './miembroarea.component.html',
  styleUrls: ['./miembroarea.component.scss']
})
export class MiembroareaComponent {
  constructor( public route:ActivatedRoute){
    
  }
}
