import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-se4',
  templateUrl: './se4.page.html',
  styleUrls: ['./se4.page.scss'],
})
export class Se4Page implements OnInit {
  // Crear Variable Booleana
  cambiarIcono: boolean = false;
  constructor() { }

  ngOnInit() {
  }


   // Crear Funcion
   onClick(){
      this.cambiarIcono = !this.cambiarIcono;
      console.log(this.cambiarIcono);
   }
}
