import { Injectable } from "@angular/core"
import {HttpClient} from "@angular/common/http"
import {HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs"
import { Proyecto } from "../models/poyect"
import { GlobalApi } from "./global"

@Injectable()
export class ProyectService{

    public url: string;

    constructor(
        private _Http: HttpClient
    ){
        this.url = GlobalApi.url;
    }

    tesService(){
        console.log("probando Servicio de Angular")
    }

    SaveProyect(proyect:Proyecto){
        let params = JSON.stringify(proyect);
        let header = new HttpHeaders().set("content-Type","application/json")

        // return this._Http.post(this.url, "")
    }
}