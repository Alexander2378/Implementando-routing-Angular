import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { CrearProyectosComponent } from './componentes/crear-proyectos/crear-proyectos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { Error404Component } from './componentes/error404/error404.component';


const routes: Routes = [
    {path: "", component: SobreMiComponent},
    {path: "sobreMi", component: SobreMiComponent},
    {path: "proyectos", component: ProyectosComponent},
    {path: "crearProyectos", component: CrearProyectosComponent},
    {path: "contacto", component: ContactoComponent},
    {path: "**", component: Error404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
