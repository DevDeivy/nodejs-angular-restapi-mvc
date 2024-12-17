import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SliderComponent } from "../../utilies/slider/slider.component";
import { SidebarComponent } from "../../utilies/sidebar/sidebar.component";
//Router es el servicio que nos permite navegar entre vistas (componentes) en una aplicación.
//ActivatedRoute es un servicio que contiene información sobre la ruta activa (la ruta que llevó al usuario a este componente).
//Params es solo un tipo (o interfaz) que define el tipo de datos que representan los parámetros de una ruta.

@Component({
  selector: 'app-pagina',
  standalone: true,
  imports: [CommonModule, FormsModule, SliderComponent, SidebarComponent],
  templateUrl: './pagina.component.html',
  styleUrl: './pagina.component.css'
})
export class PaginaComponent {

  nombre?: string;
  text?: string;

  constructor(private _router: Router, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params['nombre']; 
    });
  }
 
  redireccion(){
    this._router.navigate(['/pagina', this.text]);
  }
} 