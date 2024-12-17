import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Peliculas } from '../../peliculas';
import { SliderComponent } from "../../utilies/slider/slider.component";
import { SidebarComponent } from "../../utilies/sidebar/sidebar.component";
import { PeliculaComponent } from '../../pelicula/pelicula.component';
import { PeliculasService } from '../../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [FormsModule, CommonModule, SliderComponent, SidebarComponent, PeliculaComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class peliculasComponent {

  public peliculas?: Peliculas[];
  private _peliculasService = inject(PeliculasService);

  constructor(){
    this.peliculas = this._peliculasService.getPeliculas();
  }
  
  ngOnInit(): void{
  }
}
