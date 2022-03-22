import { Component, OnInit } from '@angular/core';
// Crear interface
interface Componente{
  icon: string,
  name: string,
  redirecTo: string
}
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})



export class PrincipalPage implements OnInit {

//Crear Lista de Paginas
componentes: Componente[] = [
  {
    icon: 'alert-circle-outline',
    name: 'Sistemas Expertos #1',
    redirecTo: '/se1'
  },
  {
    icon: 'bar-chart-outline',
    name: 'Sistemas Expertos #2',
    redirecTo: '/se2'
  },
  {
    icon: 'battery-half-outline',
    name: 'Sistemas Expertos #3',
    redirecTo: '/se3'
  },
  {
    icon: 'bicycle-outline',
    name: 'Sistemas Expertos #4',
    redirecTo: '/se4'
  },
]

  constructor() { }

  ngOnInit() {
  }

}
