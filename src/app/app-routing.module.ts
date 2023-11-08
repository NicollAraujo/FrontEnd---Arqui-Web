import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GpComponent} from './components/GrupoDeProyecto/gp/gp.component';
import { CreaeditaGpComponent} from './components/GrupoDeProyecto/creaedita-gp/creaedita-gp.component';
import { ComunicadoComponent } from './components/Comunicado/comunicado/comunicado.component';
import { CreaeditaComunicadoComponent } from './components/Comunicado/creaedita-comunicado/creaedita-comunicado.component';

const routes: Routes = [
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
