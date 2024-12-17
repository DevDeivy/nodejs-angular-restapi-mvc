import { Component } from '@angular/core';
import { SidebarComponent } from "../../utilies/sidebar/sidebar.component";
import { SliderComponent } from "../../utilies/slider/slider.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [SidebarComponent, SliderComponent, FormsModule,CommonModule],
  templateUrl: './pagina1.component.html',
  styleUrl: './pagina1.component.css'
})
export class formularioComponent {
  
  user: any;

  constructor() {
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''
    }
  }

  onSumbit(){
    if(this.user.nombre && this.user.apellidos){ 
      console.log(this.user);
    }else{
      console.log('llene los campos');
    }
  }
}
