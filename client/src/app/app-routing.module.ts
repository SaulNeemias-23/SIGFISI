import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { ComprarComponent } from './components/comprar/comprar.component';
import { CrearComponent } from './components/crear/crear.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { TeamComponent } from './components/team/team.component';
import { LoginComponent } from './components/login/login.component';
import { TipoeventoComponent } from './components/tipoevento/tipoevento.component';
import { CursoComponent } from './components/curso/curso.component';
import { TallerComponent } from './components/taller/taller.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/eventos',
    pathMatch: 'full'
  },
  {
    path: 'eventos',
    component: PrincipalComponent
  },
  {
    path: 'taller',
    component: TallerComponent
  },
  {
    path: 'curso',
    component: CursoComponent
  },
  {
    path: 'tipoevento',
    component: TipoeventoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'eventos/:id',
    component: ComprarComponent
  },
  {
    path: 'crearEvento',
    component: CrearComponent
  },
  {
    path: 'registrar',
    component: RegistrarComponent
  },
  {
    path: 'solicitudes',
    component: SolicitudesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
