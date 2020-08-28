import { Component, OnInit } from '@angular/core';
import {BrowserModule}from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-combustible',
  templateUrl: './combustible.component.html',
  styleUrls: ['./combustible.component.css']
})
export class CombustibleComponent implements OnInit {
  //crear las siguientes variables
  combustibles;
  opcionSeleccionado: string ;
  galones:number;
  precio:number;
  constructor() {
  }

  ngOnInit() {
    //inicializar las variables
    this.combustibles = ["Gasolina Especial","Gasolina Regular","Diesel"];
    this.opcionSeleccionado="Selecciona";
    this.galones=0;
    this.precio=0;
  }

  //funcion que realiza los calculos
  capturar() {
    switch(this.opcionSeleccionado){
      case'Gasolina Especial':
        this.precio=Number.parseFloat((this.galones* 4.25).toFixed(2));
      break;
      case'Gasolina Regular':
        this.precio=Number.parseFloat((this.galones*4.05).toFixed(2));
      break;
      case'Diesel':
        this.precio=Number.parseFloat((this.galones*3.96).toFixed(2));
      break;
    }
  }    
}
  
export class AppComponent {
}