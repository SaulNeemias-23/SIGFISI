import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { EventosService } from './services/eventos.service';
import { ComprarComponent } from './components/comprar/comprar.component';
import { CrearComponent } from './components/crear/crear.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { TeamComponent } from './components/team/team.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { TipoeventoComponent } from './components/tipoevento/tipoevento.component';
import { CursoComponent } from './components/curso/curso.component';
import { TallerComponent } from './components/taller/taller.component';
import { PruebaComponent } from './components/prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PrincipalComponent,
    ComprarComponent,
    CrearComponent,
    RegistrarComponent,
    SolicitudesComponent,
    TeamComponent,
    FooterComponent,
    LoginComponent,
    TipoeventoComponent,
    CursoComponent,
    TallerComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    EventosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
