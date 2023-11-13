import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { PanelComponent } from './components/panel/panel.component';
import { RolComponent } from './components/rol/rol.component';
import { ListarRolComponent } from './components/rol/listar-rol/listar-rol.component';
import { CreaeditaRolComponent } from './components/rol/creaedita-rol/creaedita-rol.component';
import { AreatrabajoComponent } from './components/areatrabajo/areatrabajo.component';
import { ListarAreatrabajoComponent } from './components/areatrabajo/listar-areatrabajo/listar-areatrabajo.component';
import { CreaeditaAreatrabajoComponent } from './components/areatrabajo/creaedita-areatrabajo/creaedita-areatrabajo.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
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
import { MiembroengrupoComponent } from './components/miembroengrupo/miembroengrupo.component';
import { TareamiembroareaComponent } from './components/tareamiembroarea/tareamiembroarea.component';
import { CreaditaMiembroengrupoComponent } from './components/miembroengrupo/creadita-miembroengrupo/creadita-miembroengrupo.component';
import { ListarMiembroengrupoComponent } from './components/miembroengrupo/listar-miembroengrupo/listar-miembroengrupo.component';
import { CreaditaTareamiembroareaComponent } from './components/tareamiembroarea/creadita-tareamiembroarea/creadita-tareamiembroarea.component';
import { ListarTareamiembroareaComponent } from './components/tareamiembroarea/listar-tareamiembroarea/listar-tareamiembroarea.component';
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
    MiembroengrupoComponent,
    TareamiembroareaComponent,
    CreaditaMiembroengrupoComponent,
    ListarMiembroengrupoComponent,
    CreaditaTareamiembroareaComponent,
    ListarTareamiembroareaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    {provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
