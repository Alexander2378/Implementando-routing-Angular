import { Component, OnInit } from '@angular/core';
// import { Proyect } from 'src/app/models/poyect';
import { Proyecto } from '../../models/poyect';
import { ProyectService } from '../../services/proyect.service';

@Component({
  selector: 'app-crear-proyectos',
  templateUrl: './crear-proyectos.component.html',
  styleUrls: ['./crear-proyectos.component.css'],
  providers: [ProyectService]
})
export class CrearProyectosComponent implements OnInit {

  public title: string;
  public proyect: Proyecto;

  constructor(
    private _proyectService: ProyectService
  ) {

    this.title = "Crear proyecto";
    this.proyect = new Proyecto("","","","",2022,"","")

   }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    console.log(this.proyect)
  }

}
