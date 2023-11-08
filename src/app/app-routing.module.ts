import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guard/auth.guard';
import { PanelComponent } from './components/panel/panel.component';
import { GpComponent } from './components/GrupoDeProyecto/gp/gp.component';
import { CreaeditaGpComponent } from './components/GrupoDeProyecto/creaedita-gp/creaedita-gp.component';
import { ComunicadoComponent } from './components/Comunicado/comunicado/comunicado.component';
import { CreaeditaComunicadoComponent } from './components/Comunicado/creaedita-comunicado/creaedita-comunicado.component';
import { RolComponent } from './components/rol/rol.component';
import { CreaeditaAreatrabajoComponent } from './components/areatrabajo/creaedita-areatrabajo/creaedita-areatrabajo.component';
import { CreaeditaRolComponent } from './components/rol/creaedita-rol/creaedita-rol.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'panel',component:PanelComponent,canActivate:[authGuard]},
  {path:'**',pathMatch:'full',redirectTo:'home'},

  {
    path: 'grupos',
    component: GpComponent,
    children: [
      { path: 'nuevo', component: CreaeditaGpComponent},
      { path: 'ediciones/:id', component: CreaeditaGpComponent },
    ],
  },

  {
    path: 'comunicados',
    component: ComunicadoComponent,
    children: [
      { path: 'nuevo', component: CreaeditaComunicadoComponent},
      { path: 'ediciones/:id', component: CreaeditaComunicadoComponent },
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
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
