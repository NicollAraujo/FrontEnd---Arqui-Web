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
import { MatTableModule } from '@angular/material/table';
import { AuthInterceptor } from './interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ListaUsuarioComponent } from './components/usuario/lista-usuario/lista-usuario.component';
import { CreaeditaUsuarioComponent } from './components/usuario/creaedita-usuario/creaedita-usuario.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { ListarTareaComponent } from './components/tarea/listar-tarea/listar-tarea.component';
import { CreaeditaTareaComponent } from './components/tarea/creaedita-tarea/creaedita-tarea.component';
import { ListarComentarioComponent } from './components/comentario/listar-comentario/listar-comentario.component';
import { CreaeditaComentarioComponent } from './components/comentario/creaedita-comentario/creaedita-comentario.component';
import { MiembroareaComponent } from './components/miembroarea/miembroarea.component';
import { CreaeditaMiembroareaComponent } from './components/miembroarea/creaedita-miembroarea/creaedita-miembroarea.component';
import { ListarMiembroareaComponent } from './components/miembroarea/listar-miembroarea/listar-miembroarea.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PanelComponent,
    RolComponent,
    ListarRolComponent,
    CreaeditaRolComponent,
    AreatrabajoComponent,
    ListarAreatrabajoComponent,
    CreaeditaAreatrabajoComponent,
    NavbarComponent,
    UsuarioComponent,
    ListaUsuarioComponent,
    CreaeditaUsuarioComponent,
    TareaComponent,
    ComentarioComponent,
    ListarTareaComponent,
    CreaeditaTareaComponent,
    ListarComentarioComponent,
    CreaeditaComentarioComponent,
    MiembroareaComponent,
    CreaeditaMiembroareaComponent,
    ListarMiembroareaComponent
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
