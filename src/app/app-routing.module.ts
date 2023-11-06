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
    path: 'roles',
    component: RolComponent,
    children: [
      { path: 'nuevo', component: CreaeditaRolComponent },
      { path: 'ediciones/:id', component: CreaeditaRolComponent },
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
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
