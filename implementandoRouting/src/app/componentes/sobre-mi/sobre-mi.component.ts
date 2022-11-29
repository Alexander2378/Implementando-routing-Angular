import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  public title:string;
  public subtitle: string;
  public email: string;
 

  constructor() {

    this.title = "Alexander Figueredo";
    this.subtitle = "Progamador Front-end"
    this.email = "Alexander@gmail.com";
   }

  ngOnInit(): void {
  }

}
