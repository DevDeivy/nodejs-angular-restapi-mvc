import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Peliculas } from '../peliculas';

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {

  @Input()pelicula?: Peliculas;
  @Input()i?: number;
}
