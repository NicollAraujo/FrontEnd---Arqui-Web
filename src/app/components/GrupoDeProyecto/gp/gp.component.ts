import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-university',
  templateUrl: './gp.component.html',
  styleUrls: ['./gp.component.css'],
})
export class GpComponent {
  constructor(public route:ActivatedRoute) {}
}
