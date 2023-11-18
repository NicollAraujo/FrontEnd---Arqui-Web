import { NgModule, Component } from '@angular/core';
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
import { TareaComponent } from './components/tarea/tarea.component';
import { CreaeditaTareaComponent } from './components/tarea/creaedita-tarea/creaedita-tarea.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { CreaeditaComentarioComponent } from './components/comentario/creaedita-comentario/creaedita-comentario.component';
import { MiembroareaComponent } from './components/miembroarea/miembroarea.component';
import { CreaeditaMiembroareaComponent } from './components/miembroarea/creaedita-miembroarea/creaedita-miembroarea.component';

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
  },
  {
    path: 'grupos',
    component: GpComponent,
    children: [
      { path: 'nuevo', component: CreaeditaGpComponent},
      { path: 'ediciones/:id', component: CreaeditaGpComponent },
    ],
  },
  {
    path: 'usuarios',
    component: UsuarioComponent,
    children: [
      { path: 'nuevo', component: CreaeditaUsuarioComponent },
      { path: 'ediciones/:id', component: CreaeditaUsuarioComponent },
    ],
  }, 
  {
    path: 'tarea',
    component: TareaComponent,
    children: [
      { path: 'nuevo', component: CreaeditaTareaComponent},
      { path: 'ediciones/:id', component: CreaeditaTareaComponent },
    ],
  },
  {
    path: 'comentario',
    component: ComentarioComponent,
    children: [
      { path: 'nuevo', component: CreaeditaComentarioComponent },
      { path: 'ediciones/:id', component: CreaeditaComentarioComponent },
    ],
  },
  {
    path: 'miembroArea',
    component: MiembroareaComponent,
    children: [
      { path: 'nuevo', component: CreaeditaMiembroareaComponent },
      { path: 'ediciones/:id', component: CreaeditaMiembroareaComponent },
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
