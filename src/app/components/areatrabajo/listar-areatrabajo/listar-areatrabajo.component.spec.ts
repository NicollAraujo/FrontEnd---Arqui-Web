import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAreatrabajoComponent } from './listar-areatrabajo.component';

describe('ListarAreatrabajoComponent', () => {
  let component: ListarAreatrabajoComponent;
  let fixture: ComponentFixture<ListarAreatrabajoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarAreatrabajoComponent]
    });
    fixture = TestBed.createComponent(ListarAreatrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
