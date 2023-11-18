import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GpComponent } from './components/GrupoDeProyecto/gp/gp.component';
import { ListarGpComponent } from './components/GrupoDeProyecto/listar-gp/listar-gp.component';
import { CreaeditaGpComponent } from './components/GrupoDeProyecto/creaedita-gp/creaedita-gp.component';
import { ComunicadoComponent } from './components/Comunicado/comunicado/comunicado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ListarComunicadoComponent } from './components/Comunicado/listar-comunicado/listar-comunicado.component';
import { CreaeditaComunicadoComponent } from './components/Comunicado/creaedita-comunicado/creaedita-comunicado.component';

@NgModule({
  declarations: [
    AppComponent,
    GpComponent,
    ListarGpComponent,
    CreaeditaGpComponent,
    ComunicadoComponent,
    ListarComunicadoComponent,
    CreaeditaComunicadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
