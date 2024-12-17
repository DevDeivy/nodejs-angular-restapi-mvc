import { Injectable } from '@angular/core';
import { Peliculas } from '../components/peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  public peliculas?: Peliculas[];

  constructor() {
    this.peliculas = [
      new Peliculas('soy leyenda', 2007, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFqb2iel3lMvq5Lhig25tm1CGqTwK8ueK8AA&s', 'Solo contra un virus que infecto a millones de personas en el mundo.'),
      new Peliculas('la purga', 2013, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanibJx1UnqXn_d8v6DFftjO-OZHa6dlERtQ&s', '12 horas libres de leyes, si, incluso matar es legal.'),
      new Peliculas('el aro 3', 2017, 'https://play-lh.googleusercontent.com/rJk22wNIZcxjzHKAC5XFbBg9m_Yhoxg-kJaqMrl3mmXVo_PlEc-zHkDyXaAW5Mgs7f74X1N_f230AqzDVLIx', 'una de las peliculas de terror mas populares del mundo.'),
      new Peliculas('chuchy el origen', 2013, 'https://es.web.img3.acsta.net/pictures/210/183/21018368_20130709150937497.jpg', 'todo el mundo conoce a chuck y su familia.'),
      new Peliculas('una obra de arte misteriosa', 2024, 'https://github.com/DevDeivy.png', 'DevDeivy'),
    ]

  }

  getPeliculas(){
    return this.peliculas;
  }       
}
