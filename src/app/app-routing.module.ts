import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guard/auth.guard';
import { PanelComponent } from './components/panel/panel.component';
import { RolComponent } from './components/rol/rol.component';
import { CreaeditaAreatrabajoComponent } from './components/areatrabajo/creaedita-areatrabajo/creaedita-areatrabajo.component';
import { CreaeditaRolComponent } from './components/rol/creaedita-rol/creaedita-rol.component';
import { AreatrabajoComponent } from './components/areatrabajo/areatrabajo.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { CreaeditaUsuarioComponent } from './components/usuario/creaedita-usuario/creaedita-usuario.component';
import { CreaeditaProyectoComponent } from './components/proyecto/creaedita-proyecto/creaedita-proyecto.component';
import { Proyecto } from './models/proyecto';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ComunicadoComponent } from './components/comunicado/comunicado.component';
import { CreaeditaComunicadoComponent } from './components/comunicado/creaedita-comunicado/creaedita-comunicado.component';
import { MiembroDeArea } from './models/miembro-de-area';
import { CreaeditaMiembroareaComponent } from './components/miembro-de-area/creaedita-miembroarea/creaedita-miembroarea.component';
import { MiembroGrupoComponent } from './components/miembro-grupo/miembro-grupo.component';
import { CreaeditaMiembrogrupoComponent } from './components/miembro-grupo/creaedita-miembrogrupo/creaedita-miembrogrupo.component';
import { GrupoDeProyecto } from './models/grupo-proyecto';
import { CreaditaGrupoproyectoComponent } from './components/grupo-de-proyecto/creadita-grupoproyecto/creadita-grupoproyecto.component';
import { Tarea } from './models/tarea';
import { TareaComponent } from './components/tarea/tarea.component';
import { CreaeditaTareaComponent } from './components/tarea/creaedita-tarea/creaedita-tarea.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { CreaeditaComentarioComponent } from './components/comentario/creaedita-comentario/creaedita-comentario.component';
import { TareaMiembroArea } from './models/tarea-miembro-area';
import { GrupoDeProyectoComponent } from './components/grupo-de-proyecto/grupo-de-proyecto.component';
import { MiembroDeAreaComponent } from './components/miembro-de-area/miembro-de-area.component';
import { TareaMiembroAreaComponent } from './components/tarea-miembro-area/tarea-miembro-area.component';
import { CreaeditaTareaMiembroAreaComponent } from './components/tarea-miembro-area/creaedita-tarea-miembro-area/creaedita-tarea-miembro-area.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'panel', component: PanelComponent, canActivate: [authGuard] },
  {
    path: 'areaTrabajo',
    component: AreatrabajoComponent ,
    children: [
      { path: 'nuevo', component: CreaeditaAreatrabajoComponent },
      { path: 'ediciones/:id', component: CreaeditaAreatrabajoComponent },
    ],
    canActivate: [authGuard]
  },
  {
    path: 'roles',
    component: RolComponent,
    children: [
      { path: 'nuevo', component: CreaeditaRolComponent },
      { path: 'ediciones/:id', component: CreaeditaRolComponent },
    ],
    canActivate: [authGuard]
  },
  {
    path: 'usuarios',
    component: UsuarioComponent,
    children: [
      { path: 'nuevo', component: CreaeditaUsuarioComponent },
      { path: 'ediciones/:id', component: CreaeditaUsuarioComponent },
    ],
    canActivate: [authGuard]
  },
  {
    path: 'proyecto',
    component: ProyectoComponent,
    children: [
      { path: 'nuevo', component: CreaeditaProyectoComponent },
      { path: 'ediciones/:id', component: CreaeditaProyectoComponent },
    ],
    canActivate: [authGuard]
  },
  {
    path: 'comunicado',
    component: ComunicadoComponent,
    children: [
      { path: 'nuevo', component: CreaeditaComunicadoComponent },
      { path: 'ediciones/:id', component: CreaeditaComunicadoComponent },
    ],
    canActivate: [authGuard]
  },
  {
    path: 'miembrodearea',
    component: MiembroDeAreaComponent,
    children: [
      { path: 'nuevo', component: CreaeditaMiembroareaComponent },
      { path: 'ediciones/:id', component: CreaeditaMiembroareaComponent },
    ],
    canActivate: [authGuard]
  },
  {
    path: 'miembrogrupo',
    component: MiembroGrupoComponent,
    children: [
      { path: 'nuevo', component: CreaeditaMiembrogrupoComponent },
      { path: 'ediciones/:id', component: CreaeditaMiembrogrupoComponent },
    ],
    canActivate: [authGuard]
  },
  {
    path: 'grupo-proyecto',
    component: GrupoDeProyectoComponent,
    children: [
      { path: 'nuevo', component: CreaditaGrupoproyectoComponent },
      { path: 'ediciones/:id', component: CreaditaGrupoproyectoComponent },
    ],
    canActivate: [authGuard]
  },
  {
    path: 'tarea',
    component: TareaComponent,
    children: [
      { path: 'nuevo', component: CreaeditaTareaComponent },
      { path: 'ediciones/:id', component: CreaeditaTareaComponent },
    ],
    canActivate: [authGuard]
  },
  {
    path: 'comentario',
    component: ComentarioComponent,
    children: [
      { path: 'nuevo', component: CreaeditaComentarioComponent },
      { path: 'ediciones/:id', component: CreaeditaComentarioComponent },
    ],
    canActivate: [authGuard]
  },
  {
    path: 'tarea-miembro-area',
    component: TareaMiembroAreaComponent,
    children: [
      { path: 'nuevo', component: CreaeditaTareaMiembroAreaComponent },
      { path: 'ediciones/:id', component: CreaeditaTareaMiembroAreaComponent },
    ],
    canActivate: [authGuard]
  },
  
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
