import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import { routing, appRoutingProviders } from "./app.router";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { CrearProyectosComponent } from './componentes/crear-proyectos/crear-proyectos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { Error404Component } from './componentes/error404/error404.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    SobreMiComponent,
    ProyectosComponent,
    ContactoComponent,
    CrearProyectosComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // routing
    HttpClientModule,
    FormsModule

  ],
  providers: [
    // appRoutingProviders,
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
